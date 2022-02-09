import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import {CgArrowLongRight} from "react-icons/cg"

export default function Button({ name, path }) {
  return (
    <Link href={path} passHref>
      <a className={styles.button}>{name}<CgArrowLongRight className={styles.arrow}/></a>
    </Link>
  );
}
