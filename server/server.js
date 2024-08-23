import Fastify from 'fastify';
import questionRoutes from "./routes/question.js"
import answerRoutes from './routes/answer.js'

const fastify = Fastify({ logger: true });

fastify.register(questionRoutes);
fastify.register(answerRoutes);

fastify.setErrorHandler((error, request, reply) => {
  reply.status(500).send({ error: 'Une erreur est survenue.' });
});

const start = async () => {
  try {
    const address = await fastify.listen(3000);
    fastify.log.info(`Server listening at ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
