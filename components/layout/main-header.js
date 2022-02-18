import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/headers/header.module.scss";

export default function MainHeader({ handleMenu }) {
  return (
    <header>
      <div className={styles.topHead}>
        <Link href="/" passHref className={styles.logo}>
          <a title="Brand logo">
            <Image
              className={styles.logoImage}
              src={
                "https://res.cloudinary.com/smithtech/image/upload/v1643950146/portfolio-imges/logo_size_m162ur.png"
              }
              width="100%"
              height="100%"
              objectFit="contain"
              alt="Brand logo"
              priority={true}
            />
          </a>
        </Link>
        <div className={styles.burger} onClick={handleMenu}>
          <div className={styles.menu}>Menu</div>
          <div className={styles.icon}>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
