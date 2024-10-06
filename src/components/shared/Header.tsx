"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="w-full sticky top-0 left-0 right-0 border-b py-2 backdrop-blur-3xl z-10">
      <nav className="container m-auto h-10  flex items-center gap-10 justify-between">
        <div className="text-2xl font-semibold">Rich Text Editor</div>
        <div className="flex-1 flex items-center gap-4">
          <Link href="/" className={cn(pathName === "/" && "text-blue-500")}>
            Home
          </Link>
          <Link
            href="/features"
            className={cn(pathName === "/features" && "text-blue-500")}
          >
            Feature
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
