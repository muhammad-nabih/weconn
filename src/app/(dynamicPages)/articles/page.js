import Link from "next/link";
import styles from "./Articles.module.css";
import ArticleCard from "@/components/articleCard/ArticleCard";
import { Suspense } from "react";

const wait = async () => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
const Articles = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();
  const productsData = data.products;
  console.log(productsData);
  return (
    <section className={styles.articlesContainer}>
      <h2 className={styles.h2}>Articles</h2>
      <div className={styles.container}>
    
          {productsData.map((product) => (
            <ArticleCard key={product.id} product={product} />
          ))}
    
      </div>
    </section>
  );
};

export default Articles;
