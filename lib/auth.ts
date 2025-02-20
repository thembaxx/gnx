import { betterAuth } from "better-auth";
import { VercelPool } from "@vercel/postgres";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: new VercelPool({
    connectionString: process.env.POSTGRES_URL,
  }),
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()],
});
