import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import bcrypt from 'bcrypt'
import ms from 'ms'

import env from '../../env'
import User from '../../models/user.model'
import {
    loginBodySchema,
    loginResponseSchema,
    TLoginBody,
    userCookiesSchema,
    TUserCookies,
    loginCookiesSchema,
    TLoginCookies,
    updateUserBodySchema,
    TUpdateUserBody
} from '../../schemas/user.schema'
import { EHttpMethods } from '../../types/fastify.types'
import { errorHandler } from '../../utils/handler.utils'

export interface ITokenPayload {
    userId: string
}

async function userRoutes(fastify: FastifyInstance) {
    fastify.route({
        url: '/login',
        method: EHttpMethods.POST,
        schema: {
            body: loginBodySchema,
            cookies: loginCookiesSchema,
            response: {
                200: loginResponseSchema
            }
        },
        errorHandler,
        handler: async (
            req: FastifyRequest<{ Body: TLoginBody; Cookies: TLoginCookies }>,
            reply: FastifyReply
        ) => {
            const { email, password } = req.body

            // Find user by email
            const user = (await User.findOne({ email }))?.toObject()

            if (!user) {
                return reply
                    .status(401)
                    .send({ error: 'Invalid email or password' })
            }

            const isPasswordValid = await bcrypt.compare(
                password,
                user.password
            )

            if (!isPasswordValid) {
                return reply
                    .status(401)
                    .send({ error: 'Invalid email or password' })
            }

            const payload = {
                userId: user.email
            }

            const { deviceUUID } = req.cookies as TLoginCookies

            // Create JWT using fastify's built-in jwt.sign method
            const accessToken = fastify.generateAccessToken(payload)
            const refreshToken = fastify.generateRefreshToken(
                payload,
                deviceUUID
            )

            return reply
                .setCookie('accessToken', accessToken, {
                    httpOnly: false,
                    secure: env.env === 'production',
                    sameSite: 'lax',
                    path: '/',
                    maxAge: ms(env.jwt.expired)
                })
                .setCookie('refreshToken', refreshToken, {
                    httpOnly: false,
                    secure: env.env === 'production',
                    sameSite: 'lax',
                    path: '/',
                    maxAge: ms(env.jwt.refreshExpired)
                })
                .send({
                    user: {
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        id: user._id!.toString(),
                        settings: user.settings
                    }
                })
        }
    })

    fastify.route({
        url: '/refresh',
        method: EHttpMethods.POST,
        schema: {
            cookies: userCookiesSchema
        },
        errorHandler,
        handler: async (
            req: FastifyRequest<{ Cookies: TUserCookies }>,
            reply: FastifyReply
        ) => {
            const cookies = req.cookies as TUserCookies

            const { accessToken, refreshToken } = await fastify.refreshTokens(
                cookies.refreshToken,
                cookies.deviceUUID
            )

            return reply
                .setCookie('accessToken', accessToken, {
                    httpOnly: false,
                    secure: env.env === 'production',
                    sameSite: 'lax',
                    path: '/',
                    maxAge: ms(env.jwt.expired)
                })
                .setCookie('refreshToken', refreshToken, {
                    httpOnly: false,
                    secure: env.env === 'production',
                    sameSite: 'lax',
                    path: '/',
                    maxAge: ms(env.jwt.refreshExpired)
                })
                .send({
                    message: 'Token refreshed'
                })
        }
    })

    fastify.route({
        url: '/logout',
        method: EHttpMethods.POST,
        schema: {
            cookies: userCookiesSchema
        },
        errorHandler,
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            const { refreshToken, deviceUUID } = req.cookies as TUserCookies

            await fastify.clearToken(refreshToken, deviceUUID)

            return {
                message: 'Successfully logged out'
            }
        }
    })

    fastify.route({
        url: '/info',
        method: EHttpMethods.GET,
        schema: {
            cookies: userCookiesSchema,
            response: {
                200: loginResponseSchema
            }
        },
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (req: FastifyRequest, reply: FastifyReply) => {

            const { userId } = req.user as ITokenPayload
            console.log(userId)

            const user = (await User.findOne({ email: userId }))?.toObject()
            console.log(user)

            if (!user) {
                return reply
                    .status(401)
                    .send({ error: 'Invalid user' })
            }

            const { name, email, role, _id, settings } = user

            return { user: {
                name,
                email,
                role,
                id: _id!.toString(),
                settings
            }}
        }
    })

    fastify.route({
        url: '/update',
        method: EHttpMethods.POST,
        schema: {
            body: updateUserBodySchema,
            cookies: userCookiesSchema,
            response: {
                200: loginResponseSchema
            }
        },
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (
            req: FastifyRequest<{ Body: TUpdateUserBody }>,
            reply: FastifyReply
        ) => {
            const { userId } = req.user as ITokenPayload
            const updateData = req.body

            if (updateData.password) {
                updateData.password = await bcrypt.hash(updateData.password, 10)
            }

            const user = (await User.findOneAndUpdate(
                { email: userId },
                { $set: updateData },
                { new: true }
            ))?.toObject()

            if (!user) {
                return reply
                    .status(404)
                    .send({ error: 'User not found' })
            }

            return {
                user: {
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    id: user._id!.toString(),
                    settings: user.settings
                }
            }
        }
    })
}

export default userRoutes
