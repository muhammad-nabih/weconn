import Landing from "@/components/landing/Landing";
import TitleSection from "@/components/titleSection/TitleSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Landing />
      <TitleSection url={"/news"} title={"latest News"} />
      <TitleSection url={"/Articles"} title={"Articles"} />
      <TitleSection url={"/IDOs"} title={"IDOs"} />
    </div>
  );
};

export default Home;
