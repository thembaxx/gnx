"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import ThemeSwitcher from "./theme-switcher";

interface NavItemProps {
  title: string;
  href: string;
  onClick?: () => void;
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

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4 8.5L20 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 15.5L20 15.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const navItems: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Connect",
    href: "/connect",
  },
];

// const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={24}
//     height={24}
//     color={"#fafafa"}
//     fill={"none"}
//     {...props}
//   >
//     <path
//       d="M2 12H7.625M7.4 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V17C2 17.9428 2 18.4142 2.29289 18.7071C2.58579 19 3.05719 19 4 19H7.4C9.38823 19 11 17.433 11 15.5C11 13.567 9.38823 12 7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M20 7H16M14 14H22C22 11.9587 20.2091 10 18 10C15.7909 10 14 11.9587 14 14ZM14 14V15C14 17.2091 15.7909 19 18 19C19.4806 19 20.7733 18.1956 21.4649 17"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={24}
//     height={24}
//     color={"#fafafa"}
//     fill={"none"}
//     {...props}
//   >
//     <path
//       d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={24}
//     height={24}
//     color={"#fafafa"}
//     fill={"none"}
//     {...props}
//   >
//     <path
//       d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//     />
//     <path
//       d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//     />
//   </svg>
// );

// const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={24}
//     height={24}
//     color={"#fafafa"}
//     fill={"none"}
//     {...props}
//   >
//     <path
//       d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={24}
//     height={24}
//     color={"#fafafa"}
//     fill={"none"}
//     {...props}
//   >
//     <path
//       d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//     />
//     <path
//       d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//     />
//     <path
//       d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

const NavItem = ({ title, href, onClick }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-2 pr-8 rounded-[10px] dark:hover:bg-[#171717] px-4",
        {
          "bg-[#2f3133] shadow-2xl": pathname === href,
        }
      )}
      onClick={onClick}
    >
      <p className="text-2xl opacity-90">{title}</p>
    </Link>
  );
};

function Navbar() {
  const [menuIsOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full h-16 flex items-center px-6 sticky top-0 z-20 shrink-0 bg-background/80 backdrop-blur-xl">
      <div className="grow flex items-center">
        <Sheet open={menuIsOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button className="p-0" size="icon" variant="ghost">
              <MenuIcon className="!h-6 !w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="dark:bg-[#1a1c1e]">
            <SheetHeader className="h-16 w-full flex flex-row items-center space-x-0 justify-start pl-6">
              <div>
                <Image src="/gnx.svg" height={20} width={20} alt="" />
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
              <div className="grow pt-4 pb-6 space-y-0 px-4">
                {navItems.map((navItem, index) => (
                  <NavItem key={index} {...navItem} onClick={handleClick} />
                ))}
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
                <a
                  href={`mailto:${siteConfig.profile.email}`}
                  className="flex items-center gap-2 text-[13px] text-secondary-foreground"
                >
                  <MailSendIcon className="h-5 w-5 text-icon" />
                  {siteConfig.profile.email}
                </a>
                <a
                  href={`m/`}
                  className="flex items-center gap-2 text-[13px] text-secondary-foreground"
                >
                  <FileDownloadIcon className="h-5 w-5 text-icon" />
                  Download CV
                </a>
              </div>
              <Separator />
              {/* <div className="px-4 py-6">
                <ThemeSwitcher />
              </div>
              <Separator /> */}
              <div className="pt-6 pb-6 px-4 space-y-6">
                <p className="text-[11px] text-muted-foreground">
                  {siteConfig.name} © <>{new Date().getFullYear()}</>{" "}
                  {` v${siteConfig.version}`}
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="text-xs">
          <span className="font-extrabold text-sm uppercase">
            {siteConfig.name}
          </span>{" "}
          ©
        </Link>
      </div>
      <div className="flex items-center space-x-2 ">
        <Link href="/work" className="h-full p-2 hover:underline">
          Work
        </Link>
        <Link href="/contact" className="h-full p-2 hover:underline">
          Let&apos;s connect
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
