import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgres://postgres:password@localhost:5432/xxxquiz'
});

export default pool;
