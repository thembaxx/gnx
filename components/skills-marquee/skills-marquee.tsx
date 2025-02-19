import {
  Marquee,
  MarqueeItem,
  MarqueeFade,
  MarqueeContent,
} from "@/components/ui/kibo-ui/marquee";

const items: { src: string; title: string }[] = [
  {
    src: "/tech/react.svg",
    title: "React",
  },
  {
    src: "/tech/nextjs.svg",
    title: "Next.js",
  },
  {
    src: "/tech/tailwindcss.svg",
    title: "Tailwind CSS",
  },
  {
    src: "/tech/vitejs.svg",
    title: "Vite",
  },
  {
    src: "/tech/vercel.svg",
    title: "Vercel",
  },
  {
    src: "/tech/neon.svg",
    title: "Neon",
  },
  {
    src: "/tech/nodejs.svg",
    title: "Node.js",
  },
  {
    src: "/tech/vscode.svg",
    title: "Visual Studio Code",
  },
  {
    src: "/tech/figma.svg",
    title: "Figma",
  },
  {
    src: "/tech/github.svg",
    title: "GitHub",
  },
  {
    src: "/tech/postman.svg",
    title: "Postman",
  },
  {
    src: "/tech/shadcn-ui.svg",
    title: "Shadcn UI",
  },
  {
    src: "/tech/stackoverflow.svg",
    title: "Stack Overflow",
  },
  {
    src: "/tech/firebase.svg",
    title: "Firebase",
  },
  {
    src: "/tech/deepseek.svg",
    title: "Deepseek",
  },
  {
    src: "/tech/openai.svg",
    title: "OpenAI",
  },
  {
    src: "/tech/postgresql.svg",
    title: "PostgreSQL",
  },
  {
    src: "/tech/adobe-xd.svg",
    title: "Adobe XD",
  },
  {
    src: "/tech/materialui.svg",
    title: "Material UI",
  },
  {
    src: "/tech/html5.svg",
    title: "HTML5",
  },
  {
    src: "/tech/css.svg",
    title: "CSS",
  },
  {
    src: "/tech/javascript.svg",
    title: "JavaScript",
  },
  {
    src: "/tech/typescript.svg",
    title: "TypeScript",
  },
  {
    src: "/tech/csharp.svg",
    title: "C#",
  },
  {
    src: "/tech/motion.svg",
    title: "Motion",
  },
  {
    src: "/tech/reactrouter.svg",
    title: "React Router",
  },
  {
    src: "/tech/styledcomponents.svg",
    title: "Styled Components",
  },
  {
    src: "/tech/zod.svg",
    title: "Zod",
  },
  {
    src: "/tech/radixui.svg",
    title: "Radix UI",
  },
  {
    src: "/tech/cloudflare.svg",
    title: "Cloudflare",
  },
  {
    src: "/tech/azure.svg",
    title: "Azure",
  },
  {
    src: "/tech/npm.svg",
    title: "npm",
  },
  {
    src: "/tech/GitHub Copilot.svg",
    title: "GitHub Copilot",
  },
  {
    src: "/tech/v0.svg",
    title: "v0",
  },
  {
    src: "/tech/pnpm.svg",
    title: "pnpm",
  },
];

function SkillsMarquee() {
  return (
    <div className="w-full">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {items.map((item, index) => (
            <MarqueeItem key={index} className="space-x-3">
              <div className="flex flex-col space-y-2">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-16"
                  style={{ objectFit: "contain" }}
                />
                <p className="text-xs opacity-85">{item.title}</p>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

export default SkillsMarquee;
