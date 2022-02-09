import Head from "next/head";
import Image from "next/image";
import Button from "../components/utils/Button";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="globalWrap">
      <div className={styles.container}>
        <div className={styles.me}>
          <small className={styles.greetings}>Hi, I’m</small>
          <h2 className={styles.name}>Ogbonna Sunday</h2>
          <p className={styles.desc}>
            Frontend Engineer passionate about delivering blazingly fast and
            optimized web applications.
          </p>

          <Button name="About Me" path="/about" />
        </div>
        <figure className={styles.vector}>
          <Image
            className={styles.vectorIllustration}
            src="https://res.cloudinary.com/smithtech/image/upload/v1643625396/portfolio-imges/vector_c5z0m9.png"
            layout="fill"
            objectFit="contain"
            alt="Developer image illustration"
          />
        </figure>
      </div>
    </div>
  );
}
