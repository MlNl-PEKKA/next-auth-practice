import { type Config } from "drizzle-kit";

export default {
    schema: "./server/db/schema.ts",
    driver: "pg",
    out: "./drizzle",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    },
    // tablesFilter: ["next-auth-practice_*"],
} satisfies Config;
