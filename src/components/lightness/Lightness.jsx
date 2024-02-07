import styles from "./Lightness.module.css";
import Image from "next/image";
const Lightness = () => {
  return (
    <div className={styles.lightness}>
      <Image src={"/images/lightness.svg"} width={1000} height={200} alt="highlight" />
    </div>
  );
};

export default Lightness;
