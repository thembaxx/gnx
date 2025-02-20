import { JobProps } from "@/types";
import {
  QueryResult,
  QueryResultRow,
  VercelPoolClient,
} from "@vercel/postgres";

export async function AddJob(client: VercelPoolClient, data: JobProps) {
  const { company, job } = data;

  const {
    address,
    country,
    logo,
    name,
    summary: companySummary,
    website,
  } = company;

  const { isRemote, role, startDate, endDate, skillsUsed, summary } = job;

  await client.sql`INSERT INTO "job" ( 
        companyAddress,
        companyCountry,
        companyLogo,
        companyName,
        companySummary,
        companyWebsite,
        isJobRemote,
        jobRole,
        jobStartDate,
        jobEndDate,
        jobSkills,
        jobSummary
        )
    VALUES(
        ${address},
        ${country},
        ${logo},
        ${name},
        ${companySummary},
        ${website},
        ${isRemote},
        ${role},
        ${startDate},
        ${endDate},
        ${JSON.stringify(skillsUsed)},
        ${summary}
    );
`;
}

export async function getJob(client: VercelPoolClient, jobId?: string) {
  let rows: QueryResult<QueryResultRow> | undefined;

  if (jobId) {
    rows = await client.sql`SELECT * FROM job WHERE id = ${jobId};`;
  } else {
    rows = await client.sql`SELECT * FROM job;`;
  }

  if (rows) {
    console.log(rows);
  }

  return rows;
}
