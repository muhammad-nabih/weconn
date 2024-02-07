import Image from "next/image";
import styles from "./ToggleIcon.module.css";
const ToggleIcon = () => {
  return (
    <div className={styles.layoutImage}>
      <Image src={"/images/toggleIcon.svg"} alt="Logo" width={24} height={24} />
    </div>
  );
};

export default ToggleIcon;
