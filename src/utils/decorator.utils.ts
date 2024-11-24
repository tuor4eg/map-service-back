import { FastifyInstance } from 'fastify'
import env from '../env'
import ms from 'ms'
import { makeKey } from '../helpers/redis.helper'

import { ITokenPayload } from '../routes/user/user.routes'

export type TRefreshTokens = {
    accessToken: string
    refreshToken: string
}

enum ETokenTypes {
    ACCESS = 'access',
    REFRESH = 'refresh'
}

export default async (fastify: FastifyInstance) => {
    fastify.decorate('authenticate', async function (
        this: FastifyInstance,
        request: any,
        _reply: any
    ) {
        const decoded = await request.jwtVerify()

        if (decoded.type !== ETokenTypes.ACCESS)
            throw new Error('Invalid token type')
    } as any)

    fastify.decorate(
        'generateAccessToken',
        function (this: FastifyInstance, payload: ITokenPayload) {
            return this.jwt.sign(
                { ...payload, type: ETokenTypes.ACCESS },
                { expiresIn: env.jwt.expired }
            )
        }
    )

    fastify.decorate(
        'generateRefreshToken',
        function (
            this: FastifyInstance,
            payload: ITokenPayload,
            deviceUUID: string
        ) {
            const refreshToken = this.jwt.sign(
                { ...payload, type: ETokenTypes.REFRESH },
                { expiresIn: env.jwt.refreshExpired }
            )

            const key = makeKey(refreshToken, deviceUUID)

            this.redis.set(
                key,
                payload.userId,
                'EX',
                ms(env.jwt.refreshExpired)
            )

            return refreshToken
        } as any
    )

    fastify.decorate(
        'refreshTokens',
        async function (
            this: FastifyInstance,
            token: string,
            deviceUUID: string
        ): Promise<TRefreshTokens> {
            const payload = this.jwt.verify<ITokenPayload>(token)

            if (!payload || !payload.userId) throw new Error(`Token is missing`)

            const getKey = makeKey(token, deviceUUID)

            const value = await this.redis.get(getKey)

            if (!value || value !== payload.userId)
                throw new Error(`Invalid or expired token`)

            const tokenPayload = { userId: payload.userId }

            const accessToken = this.generateAccessToken(tokenPayload)
            const refreshToken = this.generateRefreshToken(tokenPayload, deviceUUID)

            return { accessToken, refreshToken }
        } as any
    )

    fastify.decorate(
        'clearToken',
        async function (
            this: FastifyInstance,
            token: string,
            deviceUUID: string
        ): Promise<void> {
            const payload = this.jwt.verify<ITokenPayload>(token)

            if (!payload || !payload.userId) throw new Error(`Token is missing`)

            const getKey = makeKey(token, deviceUUID)

            const value = await this.redis.get(getKey)

            if (!value || value !== payload.userId)
                throw new Error(`Invalid or expired token`)

            await this.redis.del(getKey)
        } as any
    )
}
