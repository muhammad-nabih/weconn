"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoints } from "./mediaQuery";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import "swiper/css";
import ArticleCard from "@/components/articleCard/ArticleCard";

const ArticleSwiper = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`, {
          next: {
            revalidate: 60,
          },
        });
        const data = await response.json();
        setProductsData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={breakpoints}
      className={`mySwiper`}
    >
      {productsData.map((product) => (
        <SwiperSlide key={product.id}>
          <ArticleCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArticleSwiper;
