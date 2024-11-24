import cookie from '@fastify/cookie'
import autoLoad from '@fastify/autoload'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import path from 'path'
import fastifyRedis from '@fastify/redis'

import env from '../env'

export default async (fastify: any) => {
    fastify.register(fastifyRedis, {
        host: env.redis.host,
        password: env.redis.password,
        port: env.redis.port,
        family: 4
    })

    fastify.register(fastifyJwt, {
        secret: env.jwt.secret
    })

    fastify.register(cookie)

    fastify.register(fastifyCors, {
        origin: env.env !== 'production' ? true : env.api.frontURL,
        credentials: true
    })

    fastify.register(autoLoad, {
        dir: path.join(__dirname, `../routes`),
        matchFilter: /routes\.[^.]+$/,
        dirNameRoutePrefix: true
    })
}
