import { FastifyJwtNamespace } from '@fastify/jwt'
import { FastifyRedis } from '@fastify/redis'
import { TSchema } from '@sinclair/typebox'

import { ITokenPayload } from '../src/routes/user/user.routes'
import { TRefreshTokens } from '../src/utils/decorator.utils'

declare module 'fastify' {
    namespace Fastify {
        enum EHttpMethods {
            GET = 'GET',
            POST = 'POST',
            PUT = 'PUT',
            DELETE = 'DELETE',
            PATCH = 'PATCH',
            OPTIONS = 'OPTIONS',
            HEAD = 'HEAD'
        }
    }

    interface FastifyInstance
        extends FastifyJwtNamespace<{ namespace: 'security' }>,
            FastifyRedis {
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
