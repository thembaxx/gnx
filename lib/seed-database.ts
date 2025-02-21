import { VercelPoolClient } from "@vercel/postgres";
import { db } from "@vercel/postgres";

export async function seedUser(client: VercelPoolClient) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  const res = await client.sql`
    CREATE TABLE IF NOT EXISTS "user" (
        "id" VARCHAR(100) DEFAULT uuid_generate_v4(),
        name VARCHAR(255),
        email TEXT UNIQUE,
        "updatedAt" DATE DEFAULT NOW(),
        PRIMARY KEY("id")
    );
  `;

  console.log(res);
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

export async function seed() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;
    await client.sql`create table if not exists "user" ("id" text not null primary key, "name" text not null, "email" text not null unique, "emailVerified" boolean not null, "image" text, "createdAt" timestamp not null, "updatedAt" timestamp not null);`;
    await client.sql`create table if not exists "session" ("id" text not null primary key, "expiresAt" timestamp not null, "token" text not null unique, "createdAt" timestamp not null, "updatedAt" timestamp not null, "ipAddress" text, "userAgent" text, "userId" text not null references "user" ("id"));`;
    await client.sql`create table if not exists "account" ("id" text not null primary key, "accountId" text not null, "providerId" text not null, "userId" text not null references "user" ("id"), "accessToken" text, "refreshToken" text, "idToken" text, "accessTokenExpiresAt" timestamp, "refreshTokenExpiresAt" timestamp, "scope" text, "password" text, "createdAt" timestamp not null, "updatedAt" timestamp not null);`;
    await client.sql`create table if not exists "verification" ("id" text not null primary key, "identifier" text not null, "value" text not null, "expiresAt" timestamp not null, "createdAt" timestamp, "updatedAt" timestamp)`;
    await client.sql`create table if not exists "job" ("id" text not null primary key, "companyAddress" text not null, "companyCountry" text not null, "companyLogo" text, "companyName" text not null, "companySummary" text not null, "companyWebsite" text not null, "isJobRemote" boolean, "jobRole" text not null, "jobSkills" text not null, "jobSummary" text not null, "jobStartDate" timestamp not null, "jobEndDate" timestamp)`;
    await client.sql`COMMIT`;

    return Response.json({ message: "Database updated successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
