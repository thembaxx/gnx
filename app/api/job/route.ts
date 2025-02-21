import { AddJob, getJob } from "@/lib/job/job";
import { JobProps } from "@/types";
import { db } from "@vercel/postgres";
import { NextRequest } from "next/server";

const client = await db.connect();

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as JobProps;
    await client.sql`BEGIN`;
    await AddJob(client, data);
    await client.sql`COMMIT`;

    client.release();

    return Response.json({ message: "Database updated successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const jobId = await request.json();
    const data = await getJob(client, jobId);

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
