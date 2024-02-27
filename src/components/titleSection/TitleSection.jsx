"use client";
import Link from "next/link";
import styles from "./TitleSection.module.css";
import { useLinks } from "@/contexts/linksContexts/LinksContext";
const TitleSection = ({ title, url }) => {
  const { setActiveLink } = useLinks();

  return (
    <>
      <section className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <Link className={styles.link} href={url}>
          See All
        </Link>
      </section>
      
    </>
  );
};

export default TitleSection;
