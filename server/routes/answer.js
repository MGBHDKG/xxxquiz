export default async function (fastify, options) {
    fastify.post('/answer', async (request, reply) => {
      return { hello: 'monde' };
    });
  }