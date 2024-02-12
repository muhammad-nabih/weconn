import styles from "./Articles.module.css";
import ArticleCard from "@/components/articleCard/ArticleCard";

const Articles = () => {
  return (
    <section className={styles.articlesContainer}>
      <h2 className={styles.h2}>Articles</h2>
      <div className={styles.container}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
};

export default Articles;
