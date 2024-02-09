"use client";
import { useEffect } from "react";
// Import necessary modules
import styles from "./NavItem.module.css";
import Link from "next/link";
import { useLinks } from "@/contexts/linksContexts/LinksContext";

const NavItem = () => {
  // import all data links from context provider
  const { links, activeLink, setActiveLink } = useLinks();

  // giv the url target
  function handleClickLink(url) {
    setActiveLink(url);
    localStorage.setItem("activeLink", url);
  }

  useEffect(() => {
    const isActive = localStorage.getItem("activeLink");
    if (isActive) {
      setActiveLink(isActive);
    }
  }, [setActiveLink]);
  return (
    <>
      {links.map((link) => (
        <li
          key={link.id}
          onClick={() => handleClickLink(link.url)}
          className={`${styles.item} ${
            link.url === activeLink ? styles.active : ""
          }`}
        >
          <Link href={link.url}>{link.itemContent}</Link>
        </li>
      ))}
    </>
  );
};

export default NavItem;
