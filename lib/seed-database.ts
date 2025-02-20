import { VercelPoolClient } from "@vercel/postgres";

export async function seedUser(client: VercelPoolClient) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS "user" (
        "id" VARCHAR(100) DEFAULT uuid_generate_v4(),
        name VARCHAR(255),
        email TEXT UNIQUE,
        PRIMARY KEY("id")
    );
  `;
}

export async function seedJob(client: VercelPoolClient) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS "job" (
    --  Job id
        "id" VARCHAR(100) DEFAULT uuid_generate_v4(),
    --  Company Information
        companyAddress VARCHAR(255),
        companyCountry VARCHAR(255),
        companyLogo VARCHAR(255),
        companyName VARCHAR(255),
        companySummary TEXT,
        companyWebsite VARCHAR(255),
    --  Job information
        isJobRemote BOOLEAN,
        jobRole  VARCHAR(255),
        jobStartDate DATE DEFAULT NOW(),
        jobEndDate DATE DEFAULT NOW(),
        jobSkills TEXT,
        jobSummary TEXT,
        PRIMARY KEY("id")
    );
  `;
}
