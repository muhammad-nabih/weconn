"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import styles from "./Articles.module.css";
import ArticleCard from "@/components/articleCard/ArticleCard";
import { useState, useEffect } from "react";
const Articles = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products`, {
        next: {
          revalidate: 60,
        },
      });
      const data = await response.json();
      console.log(data);
      const productsData = data.products;
      console.log(productsData);
      setProductsData(productsData);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.articlesContainer}>
      <h2 className={styles.h2}>Articles</h2>
      <div className={styles.container}>
        {productsData.map((product) => (
          <PinContainer key={product.id} title={product.title}>
            <ArticleCard product={product} />
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Articles;
