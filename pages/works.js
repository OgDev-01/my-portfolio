import Project from "../components/utils/project";
import { getAllProjects } from "../helpers/api_fetch";
import styles from "../styles/pages/works.module.scss";
import Button from "../components/utils/Button";
import Head from "next/head";

export default function works({ projects }) {
  const project = projects.data;

  return (
    <>
      <Head>
        <title>Works | Ogbonna Sunday</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Ogbonna Sunday's Portfolio Works page"
        />

        <meta
          name="description"
          content="Ogbonna Sunday's Portfolio Works page"
        />
      </Head>
      <div className={styles.worksWrap}>
        <h1 className={styles.title}>Works</h1>
        <p>Here are some projects i have worked on</p>

        <article className={styles.projectWrap}>
          {project.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </article>
        <Button name={"Contact Me"} path={"/contact"} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
