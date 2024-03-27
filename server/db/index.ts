import { type NeonQueryFunction, neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
    conn: NeonQueryFunction<false, false> | undefined;
};

const conn = globalForDb.conn ?? neon(process.env.DATABASE_URL!);
if (process.env.NODE_ENV !== 'production') globalForDb.conn = conn;

const db = drizzle(conn, { schema });

export default db;