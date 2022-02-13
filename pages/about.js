import React from "react";
import Skills from "../components/utils/skills";
import styles from "../styles/pages/about.module.scss";
import Button from "../components/utils/Button";
import { motion } from "framer-motion";
import Head from "next/head";

const aboutVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const childVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: -30,
  },
};

const childrenVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
  },
};
export default function about() {
  return (
    <>
      <Head>
        <title>About Me | Ogbonna Sunday</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Ogbonna Sunday's Portfolio About page"
        />
      </Head>
      <section className={styles.sectionOne}>
        <motion.div
          variants={aboutVariant}
          initial="hidden"
          animate="visible"
          className={styles.aboutMe}
        >
          <motion.h1 className={styles.title}>About Me.</motion.h1>
          <motion.p variants={childVariant} className={styles.desc}>
            I’m Ogbonna Sunday, a software engineer based in Nigeria. I enjoy
            creating optimized and interactive web applications.
          </motion.p>
          <motion.h2 variants={childrenVariant} className={styles.caption}>
            When it comes to the web, I Flourish 😎
          </motion.h2>

          <motion.a
            id="tech"
            title="Click to scroll"
            className={styles.scroll}
            href="#tech"
            variants={childVariant}
          >
            scroll
          </motion.a>
        </motion.div>
      </section>
      <section className={styles.skills}>
        <h2>Technologies i’ve been working with recently</h2>
        <Skills />

        <Button
          className={styles.btn}
          name={"View Previous Works"}
          path={"/works"}
        />
      </section>
    </>
  );
}
