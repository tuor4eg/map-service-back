import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import CameraLocation from '../../models/cameraLocation.model'

async function cameraRoutes(fastify: FastifyInstance) {
    fastify.get('/list', async(req: FastifyRequest, reply: FastifyReply) => {
        const cameras = await CameraLocation.find({})

        return reply.send({ cameras })
    })
}

export default cameraRoutes