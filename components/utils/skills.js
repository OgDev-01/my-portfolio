import styles from "../../styles/pages/about.module.scss";

export default function Skills() {
  const firstSkills = [
    "Javascript(ES6+)",
    "TypeScript",
    "ReactJs",
    "Redux",
    "NextJs",
    "NodeJs",
    "Express.js",
    "Contentful",
  ];
  const secondSkills = [
    "HTML5",
    "CSS3",
    "SCSS",
    "Bootstrap",
    "Material Ui",
    "Chakra Ui",
    "Framer",
    "Figma",
  ];

  const thirdSkills = [
    "Git/Github",
    "Jest",
    "RESTful API",
    "GraphQl",
    "Commerce.js",
    "MongoDb",
    "Netlify",
    "Heroku",
    "Strapi",
  ];

  return (
    <div className={styles.listSkills}>
      <ul>
        {firstSkills.map((skill) => (
          <li key={skill} title={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <ul>
        {secondSkills.map((skill) => (
          <li key={skill} title={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <ul>
        {thirdSkills.map((skill) => (
          <li key={skill} title={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
