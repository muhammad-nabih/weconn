import styles from "./Navbar.module.css";

// All Components
import Logo from "@/components/logo/Logo";
import ItemsEle from "@/components/itemsEle/ItemsEle";
import SearchIcon from "@/components/search/search";
import ToggleIcon from "@/components/toggleIcon/ToggleIcon";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.links}>
          <ItemsEle
            itemContent={"Explore"}
            url={"/Explore"}
            isActive={"active"}
          />

          <ItemsEle
            itemContent={"Articles"}
            url={"/Articles"}
            isActive={"edit it "}
          />

          <ItemsEle itemContent={"news"} url={"/news"} isActive={"edit it "} />

          <ItemsEle itemContent={"IDOs"} url={"/IDOs"} isActive={"edit it "} />
        </ul>
        <div className={styles.layoutIcons}>
          <SearchIcon />
          <ToggleIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
