"use client";

import SkillsMarquee from "@/components/skills-marquee/skills-marquee";
import Threads from "@/components/Threads/Threads";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-screen overflow-hidden justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full">
        <SkillsMarquee />
      </div>
      <div className="h-full row-start-2 w-full fixed top-0 left-0 flex items-center justify-center">
        <Threads />
      </div>
      <main className="flex flex-col gap-8 grow items-center sm:items-start relative z-10 pt-16">
        <div className="flex space-y-3">
          <Image
            className="light:invert"
            src="/gnx.svg"
            alt="GNX logo"
            width={64}
            height={64}
            priority
          />
          <div>
            <h2 className="text-2xl font-semibold mt-2">{siteConfig.name}</h2>
            <p className="text-sm text-accent-foreground">
              <span className="italic opacity-65">www</span>themba.dev
            </p>
          </div>
        </div>
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
              {"frontend-deveoper.tsx"}
            </code>{" "}
            <span className="text-green-600 font-medium">
              {"// 3+ years exp."}
            </span>
          </li>
          <li>See my projects by tapping below.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button className="rounded-full" onClick={() => router.push("/chat")}>
            Browse .projekts
          </Button>
        </div>
      </main>
      <footer className="flex gap-6 shrink-0 flex-wrap items-center justify-center">
        <p className="text-xs opacity-75">
          Copyright © {siteConfig.profile.name} {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
