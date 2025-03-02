import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import ms from 'ms'
import {
    loginBodySchema,
    loginResponseSchema,
    userCookiesSchema,
    loginCookiesSchema,
    updateUserBodySchema,
    TLoginBody,
    TLoginCookies,
    TUserCookies,
    TUpdateUserBody
} from '../../schemas/user.schema'
import { EHttpMethods } from '../../types/fastify.types'
import { errorHandler } from '../../utils/handler.utils'
import { UserController } from '../../controllers/user.controller'
import env from '../../env'

export interface ITokenPayload {
    userId: string
}

async function userRoutes(fastify: FastifyInstance) {
    const userController = new UserController()

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
            const user = await userController.validateUser(email, password)
            
            const payload = { userId: user._id.toString() }
            const { deviceUUID } = req.cookies as TLoginCookies

            const accessToken = fastify.generateAccessToken(payload)
            const refreshToken = fastify.generateRefreshToken(payload, deviceUUID)

            return reply
                .setCookie('accessToken', accessToken, {
                    httpOnly: false,
                    secure: true,
                    sameSite: 'none',
                    path: '/',
                    maxAge: ms(env.jwt.expired),
                    domain: env.api.domain
                })
                .setCookie('refreshToken', refreshToken, {
                    httpOnly: false,
                    secure: true,
                    sameSite: 'none',
                    path: '/',
                    maxAge: ms(env.jwt.refreshExpired),
                    domain: env.api.domain
                })
                .send({ user })
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
            const { refreshToken, deviceUUID } = req.cookies as TUserCookies

            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = 
                await fastify.refreshTokens(refreshToken, deviceUUID)

            return reply
                .setCookie('accessToken', newAccessToken, {
                    httpOnly: false,
                    secure: true,
                    sameSite: 'none',
                    path: '/',
                    maxAge: ms(env.jwt.expired),
                    domain: env.api.domain
                })
                .setCookie('refreshToken', newRefreshToken, {
                    httpOnly: false,
                    secure: true,
                    sameSite: 'none',
                    path: '/',
                    maxAge: ms(env.jwt.refreshExpired),
                    domain: env.api.domain
                })
                .send({ message: 'Token refreshed' })
        }
    })

    fastify.route({
        url: '/logout',
        method: EHttpMethods.POST,
        schema: {
            cookies: userCookiesSchema
        },
        errorHandler,
        handler: async (
            req: FastifyRequest<{ Cookies: TUserCookies }>,
            reply: FastifyReply
        ) => {
            const { refreshToken, deviceUUID } = req.cookies as TUserCookies
            await fastify.clearToken(refreshToken, deviceUUID)

            reply.status(200).send({ message: 'Successfully logged out' })
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
            const user = await userController.getUserById(userId)

            reply.status(200).send({ user })
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

            const { password, settings, accounts } = req.body

            const user = await userController.updateUser(userId, { password, settings, accounts })

            reply.status(200).send({ user })
        }
    })
}

export default userRoutes
