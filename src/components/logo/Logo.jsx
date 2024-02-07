import Link from "next/link";
import styles from "./Logo.module.css";
import Image from "next/image";
const Logo = () => {
  return (
    <div className={styles.layoutImage}>
      <Link href={"/"}>
        <Image  src={"/images/logoDarkMode.svg"} alt="Logo" fill />
      </Link>
    </div>
  );
};

export default Logo;
