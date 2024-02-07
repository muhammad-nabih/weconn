import styles from "./Lightness.module.css";
import Image from "next/image";

const Lightness = () => {
  return (
    <div className={styles.lightness}>
      <div className={styles.imageContainer}>

        <Image
          priority={true}
          src={"/images/lightness.svg"}
          width={1000}
          height={200}
          alt="highlight"
        />
      </div>
    </div>
  );
};

export default Lightness;
