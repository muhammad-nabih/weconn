import ArticleInfo from "@/components/articleInfo/ArticleInfo";

import ScrollWithRangeInput from "@/components/ScrollWithRangeInput/ScrollWithRangeInput";
import ArticleLinksBar from "@/components/articleLinksBar/ArticleLinksBar";
import SizeReading from "@/components/sizeReading/SizeReadingText";
import SizeProvider from "@/contexts/sizeContext/SizeContext";
import Image from "next/image";

const ArticleDetails = ({ params }) => {
  return (
    <>
      <ArticleLinksBar />
      <ScrollWithRangeInput />
      <SizeProvider>
        <SizeReading />
        <ArticleInfo params={params} />
      </SizeProvider>
    </>
  );
};

export default ArticleDetails;
