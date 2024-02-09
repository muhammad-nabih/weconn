import styles from "./Landing.module.css";
import Image from "next/image";
export default function Landing() {
  return (
    <section>
      <div className={styles.flowerContainer}>
        <Image src={"/images/flower.svg"} fill alt="Flowers" />
      </div>
      <div className={styles.womanContainer}>
        <Image src={"/images/womenReading.svg"} fill alt="Woman Read" />
      </div>

      {/* Start Text Info Section */}
      <article className={styles.textInfo}>
        <p className={styles.headText}>
          The Ultimate Guide To
          <br />
          understanding Cryptocurrency
        </p>
        <p className={styles.description}>
          Discover Crypto In The Ultimate Guide, Exploring Its Decentralized
          System, Blockchain Tech, And Digital Currencies In Simple Terms For
          All.
        </p>
      </article>
    </section>
  );
}
