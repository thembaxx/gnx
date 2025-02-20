import { AddJob, getJob } from "@/lib/job/job";
import { seedJob } from "@/lib/seed-database";
import { JobProps } from "@/types";
import { db } from "@vercel/postgres";

const client = await db.connect();

export async function POST(data: JobProps) {
  try {
    await client.sql`BEGIN`;
    await seedJob(client);
    await AddJob(client, data);
    await client.sql`COMMIT`;

    client.release();

    return Response.json({ message: "Database updated successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET(jobId?: string) {
  try {
    const data = await getJob(client, jobId);

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
