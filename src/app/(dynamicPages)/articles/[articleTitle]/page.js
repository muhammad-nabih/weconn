import styles from "./Article.module.css";
import ScrollWithRangeInput from "@/components/ScrollWithRangeInput/ScrollWithRangeInput";
import ArticleLinksBar from "@/components/articleLinksBar/ArticleLinksBar";
import SizeReading from "@/components/sizeReading/SizeReadingText";
import Image from "next/image";

const ArticleDetails = () => {
  return (
    <>
      <ArticleLinksBar />
      <ScrollWithRangeInput />
      <SizeReading />
      <article className={styles.article}>
        <div className={styles.container}>
          {/* Image Container */}
          <div className={styles.imageContainer}>
            <Image
              src={"/images/cardImage.svg"}
              alt="landing article"
              objectFit="cover"
              width={2000}
              height={2000}
              priority={true}
            />
          </div>

          {/* Article Details  */}
          <div className={styles.articleDetails}>
            <div className="content">
              <h2 className={styles.h2}>What is the metaverse?</h2>
              <div className={styles.by}>
                by: <span className={styles.rae}>Rae</span>
              </div>
              <div className={styles.topics}>
                <span className={styles.topic}> Crypto</span>
                <span className={styles.topic}> Blockchain</span>
              </div>
            </div>
            <div className={styles.minute}>7 Minutes </div>
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>Definition of the Metaverse:</h3>
            <p className={styles.description}>
              The Metaverse is not just an abstract idea; Rather, it is a vision
              of a wide-ranging online world where various platforms seamlessly
              intersect, similar to how the Internet came with multiple sites
              accessible through a single browser. This concept, used by Neal
              Stevenson in his novel &quot;Snow Crash,&quot; imagines users
              interacting within a 3D virtual space, using virtual characters.
              Imagine attending meetings, relaxing in a digital oasis, managing
              finances, and even socializing, all within this connected world.
              Although we are not there yet, some virtual games and platforms
              offer a glimpse into the potential of the metaverse.
            </p>

            <h3 className={styles.title}>Video Games and the Metaverse:</h3>
            <p className={styles.description}>
              Video games, especially 3D and virtual reality, provide a glimpse
              into what the metaverse could be like. Modern games are no longer
              limited to entertainment only; Rather, it has evolved into
              multi-faceted experiences. Games like Roblox and Fortnite host
              virtual events and gatherings, going beyond their gaming reach.
              These platforms provide metaverse play, offering a glimpse into
              their capabilities.
            </p>

            <h3 className={styles.title}>
              The role of cryptocurrencies in the metaverse:
            </h3>
            <p className={styles.description}>
              The metaverse requires more than just an impressive vision;
              Rather, it requires a strong infrastructure to support it. This is
              where digital currencies come into play. Cryptocurrencies offer
              guarantees of secure ownership, value transfer, governance
              mechanisms, and access. In the future metaverse, work, social
              interactions, and transactions will all be more seamless, and
              ownership guarantees will be essential. This is where the
              underlying technology of blockchain and its ability to provide
              one-of-a-kind digital ownership and collectibles through
              non-fungible tokens (NFTs) comes into play. Cryptocurrencies also
              record value transfers, enabling safe and reliable transactions
              within the metaverse. Moreover, blockchain governance systems are
              perfectly compatible with the needs of the metaverse.
            </p>

            <h3 className={styles.title}>
              Metaverse Jobs and Gaming Models to Earn:
            </h3>
            <p className={styles.description}>
              Imagine working in a 3D office, where you interact with your
              colleagues virtual characters and earn your living directly in the
              virtual world. Play-to-earn models, such as those used in Axie
              Infinity, have been able to turn this dream into reality. Players
              can earn income by participating in these virtual worlds, a
              concept similar to potential job opportunities in the virtual
              world. These developments show that the virtual world is not just
              an empty dream, but has become a reality that generates income for
              many.
            </p>

            <h3 className={styles.title}>Metaverse-like projects:</h3>
            <p className={styles.description}>
              Although there is no complete virtual world yet, some projects are
              getting us closer to it. Such as SecondLive, Axie Infinity, and
              Decentraland give us an idea of ​​how the world is virtual.
              SecondLive is an online 3D venue for entertainment and business.
              Axie Infinity is a game where you can earn money while playing.
              Decentraland combines social aspects, cryptocurrencies and online
              real estate. These projects show that the virtual world can do
              different things and that blockchain technology and virtual
              reality are connected to each other.
            </p>

            <h3 className={styles.title}>What is next in the metaverse:</h3>
            <p className={styles.description}>
              Tech giants like Facebook, Microsoft, Apple, and Google are at the
              head of the virtual world movement. The goal is to create a
              unified digital world that integrates social interactions,
              communications and financial systems. Blockchain technology, with
              its integration of non-fungible asset trading and seamless
              decentralized governance, is expected to play an important role in
              shaping this future. Although an all-encompassing virtual world
              may be several years away, ongoing developments and increasing
              integration of blockchain technology point to a path toward this
              future.
            </p>

            <h3 className={styles.title}>Abstract:</h3>
            <p className={styles.description}>
              The virtual world represents the intersection of technology, human
              interaction, and imagination. Although we may not live in a fully
              integrated 3D universe yet, the elements are coming together. As
              we explore these new frontiers, our digital experiences become
              richer, more interconnected, and increasingly shaped by blockchain
              technology and cryptocurrencies.Whether or not the virtual world
              will actually happen is uncertain, but the journey is already
              transforming the way we work, play and communicate in the virtual
              world.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetails;
