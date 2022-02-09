import Project from "../components/utils/project";
import { getAllProjects } from "../helpers/api_fetch";
import styles from "../styles/pages/works.module.scss";
import Button from "../components/utils/Button";
export default function works({ projects }) {
 

  const project = projects.data;

  return (
    <>
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
