import "./landing.css";
import styles from "./Landing.module.css";
import Image from "next/image";
import Typewriter from "react-typing-effect";


export default function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.flowerContainer}>
        <Image
          src={"/images/flowers.png"}
          width={300}
          height={500}
          priority={true}
          alt="Flowers"
        />
      </div>
      <div className={styles.womanContainer}>
        <Image
          src={"/images/women.png"}
          width={300}
          height={500}
          priority={true}
          alt="Woman Read"
        />
      </div>

      {/* Start Text Info Section */}
      <article className={styles.textInfo}>
        <div className={styles.headText}>
          <div style={styles.ultimate}>
            The Ultimate <span className={styles.guide}>Guide To</span>
          </div>
          <span className={styles.guide}>understanding</span> Cryptocurrency
        </div>
        <p className={styles.description}>
          Discover Crypto In The Ultimate Guide, Exploring Its Decentralized
          System, <br className="break" />
          Blockchain Tech, And Digital Currencies In Simple Terms For All.
        </p>
      </article>
    </section>
  );
}
