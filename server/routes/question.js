import pool from '../bdd/bddConnection.js';

export default async function (fastify, options) {
  fastify.get('/question', async (request, reply) => {
    let client;

    try {
      client = await pool.connect();
      const result = await client.query('SELECT * FROM questions;');

      const randomIndex = Math.floor(Math.random() * result.rows.length);

      return result.rows[randomIndex];
    } catch (err) {
      console.error('Erreur lors de la connexion ou de la requête', err.stack);
      reply.code(500).send({ error: 'Une erreur est survenue.' });
    } finally {
      if (client) {
        client.release();
      }
    }
  });
}
