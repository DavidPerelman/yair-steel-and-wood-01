"use client";

import Link from "next/link";
import "./navLink.css";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  item: { title: string; path: string };
  key: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, item, key }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} key={key} className="link">
      {item.path === pathname ? (
        <h3 className="navLinkTitle underline">{children}</h3>
      ) : (
        <h3 className="navLinkTitle">{children}</h3>
      )}
    </Link>
  );
};

export default NavLink;
