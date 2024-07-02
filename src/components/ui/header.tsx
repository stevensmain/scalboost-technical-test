"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b-2">
      <div className="max-w-7xl w-full m-auto flex items-center justify-between px-6 py-2">
        <Link href="/" className="transition-all hover:drop-shadow-4xl">
          <span className="text-xl text-accent-foreground font-semibold hover:opacity-75 transition-opacity">
            FakeShop
          </span>
        </Link>
      </div>
    </header>
  );
}
