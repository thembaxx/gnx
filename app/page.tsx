"use client";

import SkillsMarquee from "@/components/skills-marquee/skills-marquee";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Logo } from "@/lib/icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-full w-full overflow-hidden p-8 pb-20 gap-16 sm:p-20">
      <div className="w-full">
        <SkillsMarquee />
      </div>
      <main className="flex flex-col gap-8 grow items-center relative z-10 pt-16">
        <div className="flex space-y-3">
          <Logo className="h-20 w-20 text-foreground" />
          <div>
            <h2 className="text-xl font-semibold mt-1">{siteConfig.name}</h2>
            <p className="text-sm text-accent-foreground">
              <span className="italic opacity-65">www</span>themba.dev
            </p>
          </div>
        </div>
        <div className="text-sm flex flex-col items-center text-center space-y-2">
          <div>
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
              {"frontend-deveoper.tsx"}
            </code>{" "}
            <span className="text-green-600 font-medium">
              {"// 3+ years exp."}
            </span>
          </div>
          <span>See my projects by tapping below.</span>
        </div>

        <div>
          <Button className="rounded-full" onClick={() => router.push("/work")}>
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
