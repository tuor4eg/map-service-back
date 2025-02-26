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

    fastify.route({
        url: '/update',
        method: EHttpMethods.POST,
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (req: FastifyRequest<{
            Body: {
                id: string
                [key: string]: any
            }
        }>, reply: FastifyReply) => {
            const { _id, ...updateData } = req.body

            
            if (!_id) {
                return reply.code(400).send({
                    message: 'Camera ID is required'
                })
            }

            const camera = await CameraLocation.findOne({ _id })

            if (!camera) {
                return reply.code(404).send({
                    message: 'Camera not found'
                })
            }

            // Remove id from update data to prevent _id modification attempt
            delete updateData._id

            // Update only the fields that were provided
            const updatedCamera = await CameraLocation.findByIdAndUpdate(
                _id,
                { $set: updateData },
                { new: true }
            )

            return reply.send({ 
                message: 'Camera updated successfully',
                camera: updatedCamera 
            })
        }
    })
}

export default cameraRoutes
