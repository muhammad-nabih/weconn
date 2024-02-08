import styles from "./Aside.module.css";
import { useLinks } from "@/contexts/linksContexts/LinksContext";
import Image from "next/image";
import NavItem from "../navItem/NavItem";
import { useAside } from "@/contexts/asideContext/AsideContext";
import { useEffect } from "react";
const Aside = () => {
  const { links, activeStatus, handleChangeActive } = useLinks();

  const { showAside, setShowAside } = useAside();

  return (
    <aside className={styles.aside} style={{ left: showAside ? "0%" : "100%" }}>
      <div className={styles.frame}>
        {/* Header Aside Container */}
        <div className={styles.headerContainer}>
          <h2 className={styles.h2}>Menu</h2>
          {/* Images Close */}

          <div
            className={styles.imageContainer}
            onClick={() => {
              setShowAside(false);
            }}
          >
            <Image src={"/images/close.svg"} alt="Logo" fill />
          </div>
        </div>
        {/* Links  */}
        <ul className={styles.links}>
          {links.map((link) => {
            return (
              <NavItem
                handleChangeActive={handleChangeActive}
                key={link.id}
                {...link}
                isActive={link.id === activeStatus ? "active" : ""}
              />
            );
          })}
        </ul>
        {/* footer */}
        <footer className={styles.footer}>Copyright © 2023 YAL GAMERS</footer>
      </div>
    </aside>
  );
};
export default Aside;
