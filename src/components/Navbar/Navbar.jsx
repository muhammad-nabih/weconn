"use client";
import styles from "./Navbar.module.css";

// Import Components
import Aside from "@/components/aside/Aside";
import Logo from "@/components/logo/Logo";
import NavItem from "@/components/navItem/NavItem";
import ToggleIcon from "@/components/toggleIcon/ToggleIcon";
import SearchBar from "@/components/searchBar/SearchBar";
import Link from "next/link";
import { useEffect, useState } from "react";
const Navbar = () => {
  // Import all data links from context provider
  const [scrollY, setScrollY] = useState(0);

  // Change Navbar background color when scrolling
  useEffect(() => {
    // Function to set scroll position when scrolling
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener and callback function handleScroll
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrollY > 0 ? styles.scrolled : ""}`}
    >
      <Aside />
      <nav className={styles.nav}>
        {/* Logo Icon */}
        <Link href={"/"}>
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
