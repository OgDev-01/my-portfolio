import Head from "next/head";
import Image from "next/image";
import Button from "../components/utils/Button";
import styles from "../styles/Home.module.scss";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 44em)",
  });
  return (
    <div className="globalWrap">
      {/* <rootHead title="Home"/> */}
      <Head>
        <title>Home | Ogbonna Sunday</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Ogbonna Sunday's Portfolio Home page"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.me}>
          <small className={styles.greetings}>Hi, I’m</small>
          <h2 className={styles.name}>
            Ogbonna <br /> Sunday
          </h2>
          <p className={styles.desc}>
            Frontend Engineer passionate about delivering blazingly fast and
            optimized web applications.
          </p>

          <Button name="About Me" path="/about" />
        </div>
        <figure className={styles.vector} title="Developer Illustration">
          {isDesktopOrLaptop ? (
            <Image
              className={styles.vectorIllustration}
              src="https://res.cloudinary.com/smithtech/image/upload/v1644474480/vector_dsf4lo.webp"
              layout="fill"
              objectFit="contain"
              alt="Developer image illustration"
            />
          ) : (
            ""
          )}
        </figure>
      </div>
    </div>
  );
}
