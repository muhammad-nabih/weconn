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

const Navbar = () => {
  // import all data links from context provider
  const { links, activeStatus, handleChangeActive } = useLinks();

  return (
    <header className={styles.header}>
      <Aside />
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
          {/* Search Box  */}
          <SearchBar />

          {/* Toggle Icon */}
          <ToggleIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
