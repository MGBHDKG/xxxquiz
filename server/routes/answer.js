import pool from '../bdd/bddConnection.js';

export default async function (fastify, options) {
    fastify.post('/answer', async (request, reply) => {
        let client;

        try {
            client = await pool.connect();

            const data = request.body;

            if(!request.body){
              reply.code(400).send({ error: 'Missing data or parameters' });
              return;
            }
    
            const { id, answer } = data;

            const result = await client.query('SELECT * FROM questions WHERE id = $1;', [id]);

            if(result.rows[0]["rightanswer"] == answer) return {msg: "Good answer congrats !"};

            return {msg: "Wrong Answer !", rightAnswer: result.rows[0]["rightanswer"] }

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