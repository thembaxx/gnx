import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Timeline from "@/components/work/timeline";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="currentColor"
    fill={"none"}
    {...props}
  >
    <path
      d="M9.5 14.5L14.5 9.49995"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function WorkPage() {
  return (
    <div className="w-full py-0">
      <header className="flex flex-col items-center py-8 gap-3">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt=""
            style={{ objectFit: "cover" }}
            height={92}
            width={92}
          />
        </div>
        <p className="text-[0.85rem]">
          <span className="text-foreground/70">Hi, I&apos;m Themba</span> 👋
        </p>
        <h1 className="text-3xl max-w-80 text-center text-foreground/85">
          Building digital products brands, and experiences.
        </h1>
        <a
          href={`mailto:${siteConfig.profile.email}`}
          className="flex items-center gap-2 text-[13px] text-secondary-foreground"
        >
          <LinkIcon className="h-3 w-3 shrink-0 mt-px" />
          {siteConfig.profile.email}
        </a>
        <Button
          className="mt-4 text-[0.8rem] rounded-full font-semibold px-4"
          size="sm"
        >
          Download my CV
        </Button>
      </header>
      <Separator />
      <Timeline />
    </div>
  );
}

export default WorkPage;
