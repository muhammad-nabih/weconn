"use client";
import Image from "next/image";
import styles from "./ArticleLinksBar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ArticleLinksBar() {
  const router = useRouter();
  function backHandler() {
    router.back();
  }
  function forwardHandler() {
    router.forward();
  }
  return (
    <section className={styles.containerLinks}>
      <div className={styles.links}>
        <p className={styles.articles}>Articles</p>
        <div className={styles.imageContainerBack} onClick={backHandler}>
          <Image src={"/images/Arrow - Left.svg"} fill alt="Arrow Left " />
        </div>

        <div className={styles.imageContainerForward} onClick={forwardHandler}>
          <Image src={"/images/Arrow - Right 2.svg"} fill alt="Arrow Left " />
        </div>

        <p className={styles.pForward}>Desert whales acade...</p>
      </div>
    </section>
  );
}
