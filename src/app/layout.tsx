import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { Header, Toaster } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platzi Fake Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
        <Header />

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        <Toaster />
      </body>
    </html>
  );
}
