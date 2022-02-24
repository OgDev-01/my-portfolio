import Link from "next/link";
import styles from "../../styles/headers/nav.module.scss";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/router";
import SocialLink from "../utils/socialLink";

export default function Nav({ handleMenu, menuOpen }) {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Works", url: "/works" },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1txzmRgIUgF5EQbD6bH8ZvN5D49iy5p0x/view?usp=drivesdk",
      filename: "Ogbonna-Sunday-Cv",
    },
    { name: "Contact", url: "/contact" },
  ];

  const router = useRouter();
  return (
    <>
      {menuOpen ? (
        <div className={styles.navWrap}>
          <nav className={styles.navMenu}>
            <div className={styles.closeIcon}>
              <span>close</span>{" "}
              <HiX className={styles.close} onClick={handleMenu} />
            </div>
            <ul className={styles.listItems}>
              {navLinks.map((link) => (
                <li className={styles.url} key={link.url}>
                  {link.filename ? (
                    <a
                      href="/resume/myresume.pdf"
                      download="resume"
                      className={
                        router.pathname == link.url ? styles.active : ""
                      }
                      onClick={handleMenu}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.url}>
                      <a
                        className={
                          router.pathname == link.url ? styles.active : ""
                        }
                        onClick={handleMenu}
                      >
                        {link.name}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <SocialLink />
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
