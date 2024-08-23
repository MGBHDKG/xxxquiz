import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'xxxquiz',
    password: 'password',
    port: 5432,
  });

export default client;