import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "../components/utils/Button";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const home = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const descriptionVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
  },
};

export default function Home({ theme }) {
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
        <motion.div
          className={styles.me}
          variants={home}
          initial="hidden"
          animate="visible"
        >
          <small className={styles.greetings}>Hi, I’m</small>
          <motion.h2 animate={{ opacity: 1, x: 0 }} className={styles.name}>
            Ogbonna {isDesktopOrLaptop ? <br /> : ""} Sunday
          </motion.h2>
          <motion.p
            variants={descriptionVariant}
            initial="hidden"
            animate="visible"
            className={styles.desc}
          >
            Frontend Engineer passionate about delivering blazingly fast and
            optimized web applications.
          </motion.p>

          <Button name="About Me" path="/about" />
        </motion.div>
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
