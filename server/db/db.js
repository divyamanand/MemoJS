// db.js

import pg from "pg";
import postgres from "postgres";
import 'dotenv/config';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

pg.types.setTypeParser(1114, (stringValue) => stringValue.substring(0, 10));

const revision = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// const sql = postgres(connectionString)

// export default sql;
export { revision };
