import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { EHttpMethods } from '../../types/fastify.types'
import { errorHandler } from '../../utils/handler.utils'
import { CameraController } from '../../controllers/camera.controller'
import { UserController } from '../../controllers/user.controller'
async function telegramRoutes(fastify: FastifyInstance) {
    const cameraController = new CameraController()
    const userController = new UserController()
    fastify.route({
        url: '/camera/list',
        method: EHttpMethods.GET,
        errorHandler,
        handler: async (req: FastifyRequest, reply: FastifyReply) => {
            const cameras = await cameraController.getList()
            reply.status(200).send({ cameras })
        }
    })

    fastify.route({
        url: '/camera/:id',
        method: EHttpMethods.GET,
        errorHandler,
        handler: async (req: FastifyRequest<{
            Params: {
                id: string
            }
        }>, reply: FastifyReply) => {
            const { id } = req.params
            const camera = await cameraController.getCameraById(id)
            reply.status(200).send({ camera })
        }
    })

    fastify.route({
        url: '/user/:id ',
        method: EHttpMethods.GET,
        errorHandler,
        handler: async (req: FastifyRequest<{
            Params: {
                id: string
            }
        }>, reply: FastifyReply) => {
            const { id } = req.params
            const user = await userController.getUserByTelegramId(id)
            reply.status(200).send({ user })
        }
    })
}

export default telegramRoutes 