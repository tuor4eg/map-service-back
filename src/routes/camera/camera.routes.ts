import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { IUser } from '../../models/user.model'
import { EHttpMethods } from '../../types/fastify.types'
import { errorHandler } from '../../utils/handler.utils'
import { CameraController } from '../../controllers/camera.controller'
import { UserController } from '../../controllers/user.controller'
import { ITokenPayload } from '../user/user.routes'
async function cameraRoutes(fastify: FastifyInstance) {
    const cameraController = new CameraController()
    const userController = new UserController()

    fastify.route({
        url: '/list',
        method: EHttpMethods.GET,
        preValidation: [fastify.authenticate],
        errorHandler,
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            const { userId } = req.user as ITokenPayload
            const user = await userController.getUserById(userId)
            const cameras = await cameraController.getCamerasByUser(user)

            reply.status(200).send({ cameras })
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
            const { userId } = req.user as { userId: string }
            const user = await userController.getUserById(userId)
            const { id } = req.params
            const camera = await cameraController.getCameraById(id)
            
            reply.status(200).send({ camera })
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
            const user = await userController.getUserById(id)
            const cameras = await cameraController.getCamerasByUser(user)

            reply.status(200).send({ cameras })
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
            const { userId } = req.user as { userId: string }
            const user = await userController.getUserByEmail(userId)
            const { id, ...updateData } = req.body
            
            if (!id) {
                reply.status(400).send({ error: 'Camera ID is required' })
                return
            }

            const camera = await cameraController.updateCamera(id, updateData)
            
            reply.status(200).send({ 
                message: 'Camera updated successfully',
                camera
            })
        }
    })
}

export default cameraRoutes
