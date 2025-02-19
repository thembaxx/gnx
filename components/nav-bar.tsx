"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ThemeToggle from "./theme-toggle";
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

interface NavItemProps {
  Icon: ReactNode;
  title: string;
  href: string;
  onClick?: () => void;
}

const BookmarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M13 4H6.23456C3.79424 4 2.57407 4 2.14438 4.76649C2.13129 4.78984 2.11883 4.81353 2.10701 4.83754C1.71893 5.62592 2.41032 6.63129 3.7931 8.64204C4.89612 10.246 5.44763 11.048 5.4611 11.9555C5.46154 11.9852 5.46154 12.0148 5.4611 12.0445C5.44763 12.952 4.89612 13.754 3.7931 15.358C2.41032 17.3687 1.71893 18.3741 2.10701 19.1625C2.11883 19.1865 2.13129 19.2102 2.14438 19.2335C2.57407 20 3.79424 20 6.23456 20H13C14.9628 20 15.9443 20 16.7889 19.5777C17.6334 19.1554 18.2223 18.3703 19.4 16.8C21.1333 14.4889 22 13.3333 22 12C22 10.6667 21.1333 9.51111 19.4 7.2C18.2223 5.62972 17.6334 4.84458 16.7889 4.42229C15.9443 4 14.9628 4 13 4Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M12 17H12.009"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
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

const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="52"
    color="currentColor"
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M132,24A100.11,100.11,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Z"></path>
  </svg>
);

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const iconClassname = "h-5 w-5";

const navItems: NavItemProps[] = [
  {
    Icon: <HomeIcon className={iconClassname} />,
    title: "Home",
    href: "/",
  },
  {
    Icon: <BookmarkIcon className={iconClassname} />,
    title: "Bookmarks",
    href: "/bookmarks",
  },
  {
    Icon: <MessageIcon className={iconClassname} />,
    title: "Messaging",
    href: "/chat",
  },
];

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 12H7.625M7.4 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V17C2 17.9428 2 18.4142 2.29289 18.7071C2.58579 19 3.05719 19 4 19H7.4C9.38823 19 11 17.433 11 15.5C11 13.567 9.38823 12 7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 7H16M14 14H22C22 11.9587 20.2091 10 18 10C15.7909 10 14 11.9587 14 14ZM14 14V15C14 17.2091 15.7909 19 18 19C19.4806 19 20.7733 18.1956 21.4649 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavItem = ({ Icon, title, href, onClick }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center h-9 pr-8 rounded-[10px] dark:hover:bg-[#171717]",
        {
          "bg-[#2f3133] shadow-2xl": pathname === href,
        }
      )}
      onClick={onClick}
    >
      <div className="h-9 w-9 flex items-center justify-center">{Icon}</div>
      <p className="text-sm font-medium opacity-90">{title}</p>
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
            <SheetHeader className="h-16 w-full flex flex-row items-center space-x-1 justify-start pl-6">
              <div>
                <Image src="/gnx.svg" height={20} width={20} alt="" />
              </div>
              <SheetTitle className="text-sm text-left">
                {siteConfig.name} <span className="text-xs">©</span>
              </SheetTitle>
            </SheetHeader>
            <div className="grow flex flex-col pt-8">
              <div className="px-4">
                <Button className="px-6" size="sm">
                  .projekts
                </Button>
              </div>
              <div className="grow pt-4 pb-6 space-y-2 px-4">
                {navItems.map((navItem, index) => (
                  <NavItem key={index} {...navItem} onClick={handleClick} />
                ))}
              </div>
              <div className="px-6 py-4 space-y-3">
                <div className="flex items-center py-6 -ml-[11px]">
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
                </div>
                <a
                  href={`mailto:${siteConfig.profile.email}`}
                  className="flex items-center gap-2 text-[13px] text-secondary-foreground"
                >
                  <MailSendIcon className="h-5 w-5 text-icon" />
                  {siteConfig.profile.email}
                </a>
                <p className="text-[11px] text-muted-foreground">
                  {siteConfig.name} © <>{new Date().getFullYear()}</>{" "}
                  {` v${siteConfig.version}`}
                </p>
              </div>
              <Separator />
              <div className="py-8 px-4 space-y-6">
                <Link
                  href="/settings"
                  className="flex items-center h-9 pr-8 rounded-[10px] dark:hover:bg-[#2f3133]"
                >
                  <div className="h-9 w-9 flex items-center justify-center">
                    <SettingsIcon className="text-icon h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium opacity-90">Settings</p>
                </Link>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/images/profile.jpg" />
                    <AvatarFallback>TP</AvatarFallback>
                  </Avatar>
                  <div className="grow overflow-hidden space-y-0.5">
                    <p className="text-sm truncate">
                      {siteConfig.profile.name}
                    </p>
                    <a
                      href="mailto:work@themba.dev"
                      className="text-secondary-foreground/70"
                    >
                      <p className="text-xs truncate">Frontend Developer 🚀</p>
                    </a>
                  </div>
                </div>
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
      <div className="flex items-center space-x-4">
        <Link href={siteConfig.links.github}>
          <Github className="h-6 w-6" />
        </Link>
        <ThemeToggle />
        <Avatar>
          <AvatarImage src="/images/profile.jpg" />
          <AvatarFallback>TP</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

export default Navbar;
