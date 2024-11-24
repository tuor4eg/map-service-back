import { JWT } from '@fastify/jwt'
import { FastifyRedis } from '@fastify/redis'
import { TSchema } from '@sinclair/typebox'

import { ITokenPayload } from '../src/routes/user/user.routes'
import { TRefreshTokens } from '../src/utils/decorator.utils'
import { preValidationAsyncHookHandler } from 'fastify'

declare module 'fastify' {
    interface FastifyInstance {
        jwt: JWT
        redis: FastifyRedis
        generateAccessToken: (payload: ITokenPayload) => string
        generateRefreshToken: (
            payload: ITokenPayload,
            deviceUUID: string
        ) => string
        refreshTokens: (
            token: string,
            deviceUUID: string
        ) => Promise<TRefreshTokens>
        clearToken: (token: string, deviceUUID: string) => Promise<void>
        authenticate: preValidationAsyncHookHandler
    }

    interface FastifySchema {
        cookies?: TSchema
    }

    interface RouteGenericInterface {
        Cookies?: unknown
    }

    interface FastifyRequest<RouteGeneric = RouteGenericInterface> {
        typedCookies: RouteGeneric extends { Cookies: infer TCookies }
            ? TCookies
            : Record<string, unknown>
    }
}
