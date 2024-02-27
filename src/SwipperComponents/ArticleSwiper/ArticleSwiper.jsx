"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import "swiper/css";

import styles from "./ArticleSwiper.module.css";
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
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        730: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
        2100: {
          slidesPerView: 6,
          spaceBetween: 70,
        },
      }}
      className={`mySwiper ${styles.swiperContainer}`}
      rewind={true}
      navigation={true}
      modules={[Navigation]}
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
