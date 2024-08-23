import client from "../bdd/bddConnection.js";

export default async function (fastify, options) {
    fastify.get('/question', async (request, reply) => {
        try {
            await client.connect();

            // Exécutez la requête SQL pour récupérer toutes les questions
            const result = await client.query('SELECT * FROM questions;');

            // Renvoyez les résultats de la requête
            return result.rows; // `result.rows` contient les données des lignes
        } catch (err) {
            // Gérez les erreurs de connexion ou de requête
            console.error('Erreur lors de la connexion ou de la requête', err.stack);
            reply.code(500).send({ error: 'Une erreur est survenue.' });
        } finally {
            // Fermez la connexion à la base de données
            await client.end();
        }
    });
}
