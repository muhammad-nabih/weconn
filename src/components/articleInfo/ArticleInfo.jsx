"use client";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ArticleInfo.module.css";
import { useSizeReading } from "@/contexts/sizeContext/SizeContext";
import { dataArticles } from "@/data/articleData";
import SkeletonLoading from "../skeletonLoading/SkeletonLoading";

// ArticleInfo component
export default function ArticleInfo({ params }) {
  const articleTitle = params.articleTitle;
  // Constants for text sizes
  const textSizeStyles = {
    h3Lg: "25px",
    h3Sm: "19px",
    pLg: "17px",
    pSm: "11px",
  };

  // State variables
  const { textSize } = useSizeReading();
  const { h3Lg, h3Sm, pLg, pSm } = textSizeStyles;
  const [articleInfo, setArticleInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true); // حالة التحميل

  // Fetching article information
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve();
        //   }, 1000);
        // });

        const response = await fetch(
          `https://dummyjson.com/products/${articleTitle}`,
          {
            next: {
              revalidate: 120,
            },
          }
        );
        if (!response.ok) throw new Error("Fetching article data failed");
        const data = await response.json();
        setArticleInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching article info:", error);
      }
    };
    fetchData();
  }, [articleTitle]);

  const {
    title,
    description,
    price,
    stock,
    rating,
    brand,
    category,
    thumbnail,
  } = articleInfo;

  // Show loading if data is still being fetched
  if (isLoading) {
    return <SkeletonLoading />;
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={thumbnail}
            alt="landing article"
            objectFit="cover"
            width={2000}
            height={2000}
          />
        </div>

        <div className={styles.articleDetails}>
          <div className="content">
            <h2 className={styles.h2}> {title}</h2>
            <div className={styles.by}>
              by: <span className={styles.rae}>Rae</span>
            </div>
            <div className={styles.topics}>
              <span className={styles.topic}> {brand}</span>
              <span className={styles.topic}> {category}</span>
            </div>
          </div>
          <div className={styles.minute}>{rating} Minutes </div>
        </div>

        {/*Article Info H3 + P */}

        <div className={styles.info}>
          {dataArticles.map((article, index) => (
            <div key={index} className={styles.infoContent}>
              <h3
                style={{
                  fontSize:
                    textSize === "large"
                      ? h3Lg
                      : textSize === "small"
                      ? h3Sm
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
                      ? pLg
                      : textSize === "small"
                      ? pSm
                      : "",
                }}
              >
                {description
                  ? description.repeat(3)
                  : "No description available"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
