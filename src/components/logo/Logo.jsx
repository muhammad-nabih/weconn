import Link from "next/link";
import styles from "./Logo.module.css";
import Image from "next/image";
import { useLinks } from "@/contexts/linksContexts/LinksContext";
const Logo = () => {
  return (
    <div className={styles.layoutImage}>
      <Image src={"/images/logoDarkMode.svg"} alt="Logo" fill />
    </div>
  );
};

export default Logo;
