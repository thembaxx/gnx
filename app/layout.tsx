import type { Metadata } from "next";
import { fontSans, fontSerif } from "@/config/fonts";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          "antialiased selection:bg-blue-300 bg-background font-sans h-screen overflow-y-auto",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
