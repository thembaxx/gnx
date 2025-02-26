import type { Metadata } from "next";
import { fontSans, fontSerif } from "@/config/fonts";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import Navbar from "@/components/nav-bar/nav-bar";
import { ReactScan } from "@/components/react-scan";
import { Toaster } from "sonner";

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
      <ReactScan />
      <body
        className={cn(
          "antialiased selection:bg-blue-300 bg-background font-sans scrollbar-thin scrollbar-thumb-background/40 h-screen flex flex-col overflow-y-auto",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: false,
          }}
        >
          <>
            <Navbar />
            <main className="grow ">{children}</main>
            <Toaster />
          </>
        </Providers>
      </body>
    </html>
  );
}
