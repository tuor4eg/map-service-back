'use strict'

import Fastify, {
    FastifyRegister,
    FastifyReply,
    FastifyRequest,
    FastifyInstance
} from 'fastify'
import autoLoad from '@fastify/autoload'
import fastifyCors from '@fastify/cors'
import cookie from '@fastify/cookie'
import mongoose from 'mongoose'

import { getEnv } from './helpers/env.helper'

import authRoutes from './routes/user/auth.routes'
import path from 'path'

const SECRET = getEnv('JWT_SECRET', '')
const FRONT_URL = getEnv('FRONT_URL', 'http://localhost:3000') as string
const MONGO_URI = getEnv(
    'MONGO_URI',
    'mongodb://172.17.0.1:27017/map-service-db'
) as string
const HOST = getEnv('HOST', 'localhost') as string
const PORT = getEnv('PORT', 3000) as number

class Application {
    protected fastify: FastifyInstance
    constructor() {
        this.fastify = Fastify({ logger: true })
    }

    async start() {
        try {
            // Register JWT plugin
            this.fastify.register(require('@fastify/jwt'), {
                secret: SECRET
            })

            this.fastify.register(cookie)

            this.fastify.register(fastifyCors, {
                origin: FRONT_URL,
                credentials: true
            })

            this.fastify.register(autoLoad, {
                dir: path.join(__dirname, `routes`),
                matchFilter: /routes\.[^.]+$/,
                dirNameRoutePrefix: true
            })

            await this.connectDB()

            await this.fastify.listen({ port: PORT })

            this.fastify.log.info(`Server is running on ${HOST}:${PORT}`)
            console.log(this.fastify.printRoutes())
        } catch (err) {
            this.fastify.log.error(err)
            process.exit(1)
        }
    }

    async connectDB() {
        await mongoose.connect(MONGO_URI)
        this.fastify.log.info('MongoDB connected...')
    }
}

// Start server
const start = async () => {
    try {
        const app = new Application()

        await app.start()
    } catch (err) {}
}

// Export for testing
export { Application }

if (require.main === module) {
    start()
}
