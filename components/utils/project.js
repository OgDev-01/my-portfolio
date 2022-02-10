import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/works.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

export default function Project({ data }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 44em)",
  });

  const { title, description, url, technologies, image } = data.attributes;
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        {isDesktopOrLaptop ? (
          <Image
            className={styles.img}
            placeholder="blur"
            blurDataURL={image.data.attributes.formats.thumbnail.url}
            src={image.data.attributes.url}
            layout="fill"
            alt={image.data.attributes.alternativeText}
          />
        ) : (
          <Image
            className={styles.img}
            placeholder="blur"
            blurDataURL={image.data.attributes.formats.thumbnail.url}
            src={image.data.attributes.formats.small.url}
            layout="fill"
            alt={image.data.attributes.alternativeText}
          />
        )}
        <div className={styles.overlay}></div>
        <ul className={styles.techList}>
          {technologies.data.map((tech) => (
            <li key={tech.id}>{tech.attributes.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.cardBody}>
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{description}</p>
        </div>
        <Link href={url} passHref>
          <a className={styles.link} title="Visit Page Now">
            <BiLinkExternal />
          </a>
        </Link>
      </div>
    </div>
  );
}
