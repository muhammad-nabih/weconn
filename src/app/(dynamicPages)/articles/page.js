import Link from "next/link";
import styles from "./Articles.module.css";
import ArticleCard from "@/components/articleCard/ArticleCard";

const Articles = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();
  const productsData = data.products;

  return (
    <section className={styles.articlesContainer}>
      <h2 className={styles.h2}>Articles</h2>
      <div className={styles.container}>
        {productsData.map((product, index) => (
          <ArticleCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
