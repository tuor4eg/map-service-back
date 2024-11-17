import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import CameraLocation from '../../models/cameraLocation.model'

async function cameraRoutes(fastify: any) {
    fastify.get('/list', { preValidation: [fastify.authenticate] }, async(req: FastifyRequest, reply: FastifyReply) => {
        const cameras = await CameraLocation.getCluster()

        return reply.send({ cameras })
    })

    fastify.post('/edit', async(req: FastifyRequest, reply: FastifyReply) => {
        const cameras = await CameraLocation.getCluster()

        return reply.send({ cameras })
    })
}

export default cameraRoutes