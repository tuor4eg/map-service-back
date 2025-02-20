import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import mongoose from 'mongoose'

import CameraLocation from '../../models/cameraLocation.model'
import { EHttpMethods } from '../../types/fastify.types'
import { errorHandler } from '../../utils/handler.utils'
import User from '../../models/user.model'
const { ObjectId } = mongoose.Types

async function cameraRoutes(fastify: FastifyInstance) {
    fastify.route({
        url: '/list',
        method: EHttpMethods.GET,
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            const cameras = await CameraLocation.getCluster()

            return reply.send({ cameras })
        }
    })

    fastify.post('/edit', async (req: FastifyRequest, reply: FastifyReply) => {
        const cameras = await CameraLocation.getCluster()

        return reply.send({ cameras })
    })

    fastify.route({
        url: '/:id',
        method: EHttpMethods.GET,
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (req: FastifyRequest<{
            Params: {
                id: string
            }
        }>, reply: FastifyReply) => {
            const { id } = req.params
            const camera = await CameraLocation.findOne({ _id: id })

            if (!camera) {
                return reply.code(404).send({
                    message: 'Camera not found'
                })
            }
            
            return reply.send({ camera })
        }
    })

    fastify.route({
        url: '/user/:id',
        method: EHttpMethods.GET,
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (req: FastifyRequest<{
            Params: {
                id: string
            }
        }>, reply: FastifyReply) => {
            const { id } = req.params
            
            const user = await User.findOne({ _id: id })

            if (!user) {
                return reply.code(404).send({
                    message: 'User not found'
                })
            }
            const cameras = await CameraLocation.getListByUser(user)

            return reply.send({ cameras })
        }
    })
}

export default cameraRoutes
