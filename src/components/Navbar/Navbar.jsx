"use client";
import styles from "./Navbar.module.css";
// Import hooks
import { useLinks } from "@/contexts/linksContexts/LinksContext";
// Import Components
import Aside from "@/components/aside/Aside";
import Logo from "@/components/logo/Logo";
import NavItem from "@/components/navItem/NavItem";
import ToggleIcon from "@/components/toggleIcon/ToggleIcon";
import SearchBar from "@/components/searchBar/SearchBar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LinksProvider from "@/contexts/linksContexts/LinksContext";
const Navbar = () => {
  // import all data links from context provider
  const { setActiveLink } = useLinks();

  return (
    <header className={styles.header}>
      <Aside />
      <nav className={styles.nav}>
        {/* Logo Icon */}
        <Link href={"/"} onClick={() => setActiveLink("/")}>
          <Logo />
        </Link>

        {/* Navigation Links */}
        <ul className={styles.links}>
          <NavItem />
        </ul>

        {/* Search Icon, Search Input, and Toggle Icon */}
        <div className={styles.layoutIcons}>
          <SearchBar />
          <ToggleIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
