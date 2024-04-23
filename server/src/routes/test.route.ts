import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async function testRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request, reply) => {
    reply.send({
      message: 'Server run at: http://localhost:3030'
    })
  })
}
