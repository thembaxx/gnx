import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function extractInitials(name: string | null | undefined): string {
  if (!name) return "";

  const ignoreList = ["ext"]; // titles to ignore

  return name
    .split(",")
    .filter((part) => !ignoreList.includes(part.toLowerCase()))
    .map((part) => part.trim())
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
