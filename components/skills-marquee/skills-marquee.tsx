import {
  Marquee,
  MarqueeItem,
  MarqueeFade,
  MarqueeContent,
} from "@/components/ui/kibo-ui/marquee";
import { cn } from "@/lib/utils";
import { skills } from "./skills";

function SkillsMarquee() {
  return (
    <div className="w-full">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {skills.map((item, index) => (
            <MarqueeItem key={index} className="space-x-3">
              <div className="flex flex-col space-y-2">
                <img
                  src={item.src}
                  alt={item.title}
                  className={cn("h-11", { invert: !!item.invert })}
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
