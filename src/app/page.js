import ArticleSwiper from "@/SwipperComponents/ArticleSwiper/ArticleSwiper";
import Landing from "@/components/landing/Landing";
import TitleSection from "@/components/titleSection/TitleSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Landing />
      <TitleSection url={"/news"} title={"latest News"} />
      <TitleSection url={"/articles"} title={"Articles"} />
      <ArticleSwiper />
      <TitleSection url={"/idos"} title={"IDOs"} />
    </div>
  );
};

export default Home;
