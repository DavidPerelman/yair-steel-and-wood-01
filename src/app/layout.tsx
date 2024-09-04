"use client";

import { Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const assistant = Assistant({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
    const container = document.querySelector(".container");

    if (container) {
      if (pathname === "/") {
        container.classList.add("homePageContainer");
      } else {
        container.classList.remove("homePageContainer");
      }
    }
  }, [pathname, setOpen]);

  return (
    <html lang="en">
      <body className={assistant.className} suppressHydrationWarning={true}>
        <Navbar open={open} setOpen={setOpen} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
