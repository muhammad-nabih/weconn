import styles from "./Article.module.css";
import ScrollWithRangeInput from "@/components/ScrollWithRangeInput/ScrollWithRangeInput";
import ArticleLinksBar from "@/components/articleLinksBar/ArticleLinksBar";
import SizeReading from "@/components/sizeReading/SizeReadingText";
import Image from "next/image";

const ArticleDetails = () => {
  return (
    <>
      <ArticleLinksBar />
      <ScrollWithRangeInput />
      <SizeReading />
      <article className={styles.article}>
        <div className={styles.container}>
          {/* Image Container */}
          <div className={styles.imageContainer}>
            <Image
              src={"/images/cardImage.svg"}
              alt="landing article"
              objectFit="cover"
              width={2000}
              height={2000}
              priority={true}
            />
          </div>

          {/* Article Details  */}
          <div className={styles.articleDetails}>
            <div className="content">
              <h2 className={styles.h2}>What is the metaverse?</h2>
              <div className={styles.by}>
                by: <span className={styles.rae}>Rae</span>
              </div>
              <div className={styles.topics}>
                <span className={styles.topic}> Crypto</span>
                <span className={styles.topic}> Blockchain</span>
              </div>
            </div>
            <div className={styles.minute}>7 Minutes </div>
          </div>

          {/*  */}
        </div>
      </article>
    </>
  );
};

export default ArticleDetails;
