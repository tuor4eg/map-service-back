'use strict'

import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import mongoose from 'mongoose'

import { getEnv } from './helpers/env.helper'

import authRoutes, { FastifyJWT } from './routes/auth.routes'

const fastify = Fastify({ logger: true })

// Register JWT plugin
fastify.register(require('fastify-jwt'), {
    secret: getEnv('JWT_SECRET', '')
})

fastify.register(fastifyCors, {
    origin: 'http://localhost:5173'
})

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(getEnv('MONGO_URI', 'mongodb://172.17.0.1:27017/map-service-db') as string)
        fastify.log.info('MongoDB connected...')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

fastify.register(authRoutes as any)

// Start server
const start = async () => {
    try {
        await connectDB()
        await fastify.listen({ port: getEnv('PORT', 3000) as number })
        fastify.log.info(`Server is running on ${getEnv('HOST', 'localhost')}: ${getEnv('PORT', 3000)}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

// Export for testing
export { fastify, connectDB }

if (require.main === module) {
    start()
}
