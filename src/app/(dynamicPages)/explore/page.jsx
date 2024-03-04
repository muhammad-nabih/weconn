// Import Module File
import ArticleSwiper from "@/SwipperComponents/ArticleSwiper/ArticleSwiper";
import TitleSection from "@/components/titleSection/TitleSection";
const Explore = () => {
  return (
    <>
      <TitleSection url={"/news"} title={"latest News"} />
      <TitleSection url={"/articles"} title={"Articles"} />
      <ArticleSwiper />
      <TitleSection url={"/idos"} title={"IDOs"} />
    </>
  );
};

export default Explore;
