import Link from "next/link";
import styles from "./TitleSection.module.css";
const TitleSection = ({ title, url }) => {
  return (
    <section className={styles.box}>
      <h3 className={styles.title}>{title}</h3>
      <Link className={styles.link} href={url}>
        See All
      </Link>
    </section>
  );
};

export default TitleSection;
