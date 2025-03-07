"use client";

import Link from "next/link";

import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";

import { Menu } from "./menu";
import AdminLoginButton from "./admin-login-button";
import { authClient } from "@/lib/auth-client";

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

function Navbar() {
  const { data } = authClient.useSession();

  return (
    <nav className="w-full h-16 flex items-center px-6 sticky top-0 z-20 shrink-0 bg-background/80 backdrop-blur-xl">
      <div className="grow flex items-center">
        <Menu user={data?.user}>
          <Button className="p-0" size="icon" variant="ghost">
            <MenuIcon className="!h-6 !w-6" />
          </Button>
        </Menu>

        <Link href="/" className="text-xs">
          <span className="font-extrabold text-sm uppercase">
            {siteConfig.name}
          </span>{" "}
          ©
        </Link>
      </div>
      <ul className="flex items-center space-x-2">
        {siteConfig.navItems.map(({ label, href }, index) => (
          <li key={index}>
            <Link href={href} className="h-full p-2 hover:underline">
              {label}
            </Link>
          </li>
        ))}
        {!data?.user && (
          <li className="hidden md:block">
            <div className="py-4 px-6 flex">
              <AdminLoginButton />
            </div>
          </li>
        )}
        {data?.user && (
          <li>
            <Link
              href="/admin"
              className="h-full p-2 hover:underline hidden md:block"
            >
              Admin
            </Link>
          </li>
        )}
        {data?.user && (
          <li className="hidden md:block">
            <div className="flex items-center py-4 px-6">
              <Button
                size="sm"
                variant="destructive"
                onClick={async () => await authClient.signOut()}
              >
                Sign out
              </Button>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
