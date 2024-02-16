"use client";
import styles from "./ArticleInfo.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSizeReading } from "@/contexts/sizeContext/SizeContext";
import { dataArticles } from "@/data/articleData";
export default function ArticleInfo() {
  const { textSize } = useSizeReading();
  const [sizeTextStyle, setSizeTextStyle] = useState({
    h3Lg: "25px",
    h3Sm: "19px",
    pLg: "17px",
    pSm: "11px",
  });

  return (
    <article className={styles.article}>
      <div className={styles.container}>
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

        <div className={styles.info}>
          {dataArticles.map((article, index) => (
            <div key={index}>
              <h3
                style={{
                  fontSize:
                    textSize === "large"
                      ? sizeTextStyle.h3Lg
                      : textSize === "small"
                      ? sizeTextStyle.h3Sm
                      : "",
                }}
                className={styles.title}
              >
                {article.title}
              </h3>
              <p
                className={styles.description}
                style={{
                  fontSize:
                    textSize === "large"
                      ? sizeTextStyle.pLg
                      : textSize === "small"
                      ? sizeTextStyle.pSm
                      : "",
                }}
              >
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
