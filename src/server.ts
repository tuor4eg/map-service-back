'use strict'

import Fastify, { FastifyInstance } from 'fastify'
import mongoose from 'mongoose'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

import register from './utils/register.utils'
import decorator from './utils/decorator.utils'
import env from './env'
import { getLoggerSettings } from './helpers/log.helper'
class Application {
    protected fastify: FastifyInstance
    constructor(disableRequestLogging = true /* for test purpose only */) {
        this.fastify = Fastify({
            logger: getLoggerSettings(),
            disableRequestLogging: env.env !== 'production' ? disableRequestLogging : true
        }).withTypeProvider<TypeBoxTypeProvider>()
    }

    async init() {
        await register(this.fastify)
        await decorator(this.fastify)
        await this.connectDB()
    }

    async start() {
        try {
            await this.init()

            await this.fastify.listen({ port: env.port })

            this.fastify.log.info(
                `Server is running on ${env.host}:${env.port}`
            )
            console.log(this.fastify.printRoutes())
        } catch (err) {
            this.fastify.log.error(err)
            this.close()
            process.exit(1)
        }
    }

    async ready() {
        await this.init()
        await this.fastify.ready()
    }

    /**
     * test injection
     */
    public inject(opts: any) {
        return this.fastify.inject(opts)
    }

    public close() {
        return this.fastify.close()
    }

    async connectDB() {
        await mongoose.connect(env.mongo.uri)
        this.fastify.log.info('MongoDB connected...')
    }
}

// Start server
const start = async () => {
    try {
        const app = new Application()

        await app.start()
    } catch (err) {
        process.exit(1)
    }
}

// Export for testing
export { Application }

if (require.main === module) {
    start()
}
