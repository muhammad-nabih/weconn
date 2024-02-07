"use client";
import styles from "./Navbar.module.css";
import Logo from "@/components/logo/Logo";
import NavItem from "@/components/navItem/NavItem";
import Search from "@/components/search/Search";
import ToggleIcon from "@/components/toggleIcon/ToggleIcon";
import { useState } from "react";
import { useLinks } from "@/contexts/linksContexts/LinksContext";

const Navbar = () => {
  // import all data links from context provider
  const { links } = useLinks();

  // Make Links dynamically active
  const [activeStatus, setActiveStatus] = useState(null);
  function handleChangeActive(newActiveStatus) {
    setActiveStatus(newActiveStatus);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo Icon */}
        <Logo />

        {/* Navigation Links */}
        <ul className={styles.links}>
          {links.map((link) => (
            <NavItem
              handleChangeActive={handleChangeActive}
              key={link.id}
              {...link}
              isActive={link.id === activeStatus ? "active" : ""}
            />
          ))}
        </ul>

        {/* Search Icon, Search Input, and Toggle Icon */}
        <div className={styles.layoutIcons}>
          <Search />
          <ToggleIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
