import { Pool } from 'pg';

const connectionString = 'URLEDITADA';

const db = new Pool({ connectionString });

export default db;
