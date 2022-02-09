import React from "react";
import Skills from "../components/utils/skills";
import styles from "../styles/pages/about.module.scss";
import Button from "../components/utils/Button";

export default function about() {
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.aboutMe}>
          <h1 className={styles.title}>About Me.</h1>
          <p className={styles.desc}>
            I’m Ogbonna Sunday, a software engineer based in Nigeria. I enjoy
            creating optimized and interactive web applications.
          </p>
          <h2 className={styles.caption}>
            When it comes to the web, I Flourish 😎
          </h2>

          <a id="tech" className={styles.scroll} href="#tech">
            scroll
          </a>
        </div>
      </section>
      <section className={styles.skills}>
        <h2>Technologies i’ve been working with recently</h2>
        <Skills />

        <Button name={"View Previous Works"} path={"/works"} />
      </section>
    </>
  );
}
