import Image from "next/image";
import styles from "./ArticleCard.module.css";
import Link from "next/link";

const ArticleCard = ({ product }) => {
  const { id, description, rating, brand, category, thumbnail } = product;

  const TheLevel =
    rating > 4.5
      ? "Hard"
      : rating < 4.2
      ? "Beginner"
      : rating <= 4.5 && rating >= 4.2
      ? "Medium"
      : "";

  return (
    <Link href={`articles/${id}`} style={{ margin: "0 auto" }}>
      <div className={styles.card}>
        <div className={styles.level}>
          <span className={styles.bullet}></span>
          <span className={styles.levelWord}>{TheLevel}</span>
        </div>

        {/* Image Box */}
        <div className={styles.imageContainer}>
          <Image
            src={thumbnail}
            alt={description}
            width={320}
            height={320}
            layout="responsive"
            objectFit="cover" // Updated to the latest objectFit property
          />
        </div>
        <p className={styles.description}>{description}</p>
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
