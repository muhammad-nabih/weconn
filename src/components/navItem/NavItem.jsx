"use client";
import { useEffect } from "react";
// Import necessary modules
import styles from "./NavItem.module.css";
import Link from "next/link";
import { useLinks } from "@/contexts/linksContexts/LinksContext";
import { usePathname } from "next/navigation";
const NavItem = () => {
  // import all data links from context provider
  const { links, activeLink, setActiveLink } = useLinks();
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li
          key={link.id}
          className={`${styles.item} ${
            pathname === link.url ? styles.active : ""
          }`}
        >
          <Link href={link.url}>{link.itemContent}</Link>
        </li>
      ))}
    </>
  );
};

export default NavItem;
