"use client";

import Threads from "@/components/Threads/Threads";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="h-full w-full fixed top-0 left-0 flex items-center justify-center">
        <Threads />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            className="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white"
            onClick={() => router.push("/chat")}
          >
            Get started
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-xs">
          Copyright © {siteConfig.profile.name} {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
