"use client";
import styles from "./ArticleCard.module.css";
import Image from "next/image";
import Link from "next/link";
const ArticleCard = ({ product }) => {
  const { title, id, description, rating, brand, category, thumbnail } =
    product;

  const TheLevel =
    rating > 4.5
      ? "Hard"
      : rating < 4.2
      ? "Beginner"
      : rating <= 4.5 && rating >= 4.2
      ? "Medium"
      : "";
  const backgroundColor =
    TheLevel === "Hard"
      ? "#ff0000"
      : TheLevel === "Medium"
      ? "#40A2E3"
      : "#34C700";

  return (
    <Link href={`articles/${id}`} style={{ margin: "0 auto" }}>
      <div className={styles.card}>
        <div className={styles.level}>
          <span
            style={{ backgroundColor: backgroundColor }}
            className={styles.bullet}
          ></span>
          <span className={styles.levelWord}>{TheLevel}</span>
        </div>

        {/* Image Box */}
        <div className={styles.imageContainer}>
          <Image src={thumbnail} alt={description} width={490} height={490} />
        </div>
        <p className={styles.description}>{title}</p>
        <div className={styles.topicBox}>
          <span className={styles.topic}>{category}</span>
          <span className={styles.topic}>{brand}</span>
        </div>
        <hr className={styles.line} />
        <div className={styles.footerCard}>
          by: <span className={styles.rae}>Rae</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
