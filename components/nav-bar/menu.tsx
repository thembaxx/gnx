"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import ThemeSwitcher from "./theme-switcher";
import { Logo, MicrosoftAdminIcon } from "@/lib/icons";
import AdminLoginButton from "./admin-login-button";
import { auth } from "@/lib/auth";
import Profile from "./profile";

interface MenuProps {
  children: ReactNode;
  user: typeof auth.$Infer.Session.user | undefined;
}

const FileDownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M4 7C4.58984 7.60684 6.15973 10 7 10C7.84027 10 9.41016 7.60684 10 7M7 9L7 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 13L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailSendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Menu = ({ children, user }: MenuProps) => {
  const pathname = usePathname();
  const [menuIsOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet open={menuIsOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="left" className="dark:bg-[#1a1c1e]">
        <SheetHeader className="h-16 w-full flex flex-row items-center space-x-0 justify-start pl-6">
          <div>
            <Logo className="h-6 w-6 text-foreground" />
          </div>
          <SheetTitle className="text-sm text-left">
            {siteConfig.name} <span className="text-xs font-normal">©</span>
          </SheetTitle>
        </SheetHeader>
        <div className="grow flex flex-col pt-8">
          <div className="px-4">
            <Button className="px-4" size="sm">
              .projekts
            </Button>
          </div>
          <ul className="grow pt-4 pb-6 space-y-0 px-4">
            {siteConfig.navMenuItems.map(({ href, label }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center py-2 pr-8 rounded-[10px] dark:hover:bg-[#171717] px-4",
                    {
                      "dak:bg-[#2f3133] bg-neutral-200 shadow/20 dark:shadow-2xl":
                        pathname === href,
                    }
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <p className="text-xl opacity-90">{label}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-4 px-6 flex overflow-hidden">
            {!user && <AdminLoginButton onClick={() => setIsMenuOpen(false)} />}
            {user && (
              <Profile user={user} onClick={() => setIsMenuOpen(false)} />
            )}
          </div>
          <Separator />
          <div className="px-6 py-8 space-y-4">
            {/* <div className="flex items-center py-2 -ml-[11px]">
                  <div className="flex items-center justify-center h-11 w-11">
                    <LinkedinIcon className="h-5 w-5 text-icon" />
                  </div>
                  <div className="flex items-center justify-center h-11 w-11">
                    <GithubIcon className="h-5 w-5 text-icon" />
                  </div>
                  <div className="flex items-center justify-center h-11 w-11">
                    <BehanceIcon className="h-5 w-5 text-icon" />
                  </div>
                  <div className="flex items-center justify-center h-11 w-11">
                    <TwitterIcon className="h-5 w-5 text-icon" />
                  </div>
                  <div className="flex items-center justify-center h-11 w-11">
                    <DiscordIcon className="h-5 w-5 text-icon" />
                  </div>
                </div> */}
            {user && (
              <Link
                className="flex items-center gap-2 text-sm text-secondary-foreground"
                href="/admin"
                onClick={() => setIsMenuOpen(false)}
              >
                <MicrosoftAdminIcon className="h-4 w-4 text-icon shrink-0" />
                <span>Administration</span>
              </Link>
            )}
            <a
              href={`mailto:${siteConfig.profile.email}`}
              className="flex items-center gap-2 text-sm text-secondary-foreground"
            >
              <MailSendIcon className="h-5 w-5 text-icon" />
              {siteConfig.profile.email}
            </a>
            <a
              href={`/`}
              className="flex items-center gap-2 text-sm text-secondary-foreground"
            >
              <FileDownloadIcon className="h-5 w-5 text-icon" />
              Download CV
            </a>
          </div>
          <Separator />
          <div className="px-4 py-6">
            <ThemeSwitcher />
          </div>
          <Separator />
          <div className="py-3 px-4">
            <p className="text-[11px] text-muted-foreground">
              {siteConfig.name} © <>{new Date().getFullYear()}</>{" "}
              {` v${siteConfig.version}`}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
