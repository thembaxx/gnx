"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { cn } from "@/lib/utils";
// import { Check, Minus } from "lucide-react";
import { useTheme } from "next-themes";
import { useId } from "react";

const PaintBucketIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M19 12.1294L12.9388 18.207C11.1557 19.9949 10.2641 20.8889 9.16993 20.9877C8.98904 21.0041 8.80705 21.0041 8.62616 20.9877C7.53195 20.8889 6.64039 19.9949 4.85726 18.207L2.83687 16.1811C1.72104 15.0622 1.72104 13.2482 2.83687 12.1294M19 12.1294L10.9184 4.02587M19 12.1294H2.83687M10.9184 4.02587L2.83687 12.1294M10.9184 4.02587L8.89805 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 20 17 20 17C20 17 22 18.8954 22 20Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const items = [
  { value: "light", label: "Light", image: "/ui-light.png" },
  { value: "dark", label: "Dark", image: "/ui-dark.png" },
  { value: "system", label: "System", image: "/ui-system.png" },
];

export default function ThemeSwitcher() {
  const id = useId();
  const { setTheme, theme } = useTheme();

  const handleValueChange = (value: string) => {
    setTheme(value);
  };

  return (
    <fieldset className="space-y-4">
      <legend className="text-xs font-medium flex items-center leading-none text-foreground/80">
        <PaintBucketIcon className="h-4 w-4 mr-1.5" />
        Theme
      </legend>
      <RadioGroup
        className="group grid-cols-3 gap-3"
        value={theme}
        onValueChange={handleValueChange}
      >
        {items.map((item) => (
          <label key={`${id}-${item.value}`}>
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              checked={theme === item.value}
              className="peer sr-only after:absolute after:inset-0"
            />
            <img
              src={item.image}
              alt={item.label}
              width={64}
              height={56}
              className="relative cursor-pointer overflow-hidden rounded-lg border border-input shadow-sm shadow-black/5 outline-offset-2 transition-colors peer-[:focus-visible]:outline-2 peer-[:focus-visible]:outline-ring/70 peer-data-[disabled]:cursor-not-allowed peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent peer-data-[disabled]:opacity-50"
            />
            {/* <span className="group mt-2 flex items-center gap-1 peer-data-[state=unchecked]:text-muted-foreground/70">
              <Check
                size={16}
                strokeWidth={2}
                className={cn("peer-data-[state=unchecked]:group-[]:hidden", {
                  hidden: theme !== item.value,
                })}
                aria-hidden="true"
              />
              <Minus
                size={16}
                strokeWidth={2}
                className={cn("peer-data-[state=checked]:group-[]:hidden", {
                  hidden: theme === item.value,
                })}
                aria-hidden="true"
              />
              <span className="text-xs font-medium">{item.label}</span>
            </span> */}
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
