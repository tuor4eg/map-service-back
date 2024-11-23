import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import CameraLocation from '../../models/cameraLocation.model'
import { EHttpMethods } from '../../types/fastify.types'
import { errorHandler } from '../../utils/handler.utils'

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
}

export default cameraRoutes
