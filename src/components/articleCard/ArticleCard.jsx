import Image from "next/image";
import styles from "./ArticleCard.module.css";

const ArticleCard = () => {
  return (
    <div className={styles.frame}>
      <div className={styles["overlap-group"]}>
        <Image src={"/images/cardImage.png"} fill={true} alt="image card" />
        <div className={styles.div}>
          <div className={styles.rectangle} />
          <div className={styles.level}>BEGINNER</div>
        </div>
      </div>
      <p className={styles["desert-whales"]}>
        Desert Whales Academy Opens A Way To Learn The Future Technologies
      </p>
      <div className={styles["div-wrapper"]}>
        <div className={styles["text-wrapper"]}>Crypto</div>
      </div>
      <div className={styles["div-wrapper-2"]}>
        <div className={styles["text-wrapper"]}>Blockchain</div>
      </div>
      <hr className={styles.line} />
      <p className={styles["by-rae"]}>
        <span className={styles.span}>by:</span>
        <span className={styles["text-wrapper-2"]}>&nbsp;</span>
        <span className={styles["text-wrapper-3"]}>Rae</span>
      </p>
    </div>
  );
};

export default ArticleCard;
