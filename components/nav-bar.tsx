import Link from "next/link";
import React from "react";
import ThemeToggle from "./theme-toggle";

function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center px-6 sticky top-0 bg-background/80 backdrop-blur-xl">
      <div className="grow">
        <Link href="/">
          <span className="font-extrabold text-xs uppercase">GNX</span>©
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
