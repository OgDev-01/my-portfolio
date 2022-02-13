import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import { CgArrowLongRight } from "react-icons/cg";
import { motion } from "framer-motion";

const buttonVariant = {
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
export default function Button({ name, path }) {
  return (
    <Link href={path} passHref>
      <motion.a
        variants={buttonVariant}
        initial="hidden"
        animate="visible"
        className={styles.button}
      >
        {name}
        <CgArrowLongRight className={styles.arrow} />
      </motion.a>
    </Link>
  );
}
