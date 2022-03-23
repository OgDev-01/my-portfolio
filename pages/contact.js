import Button from "../components/utils/Button";
import styles from "../styles/pages/contact.module.scss";
import Link from "next/link";
import { Socials } from "../components/utils/socialLink";
export default function Contact() {
  console.log(Socials);
  return (
    <div className="aboutRoot">
      <div className={styles.aboutWrap}>
        <h1 className={styles.heading}>CONTACT</h1>
        <p className={styles.description}>Wanna Reach out to me??</p>

        <Link href="mailto:oliviamegan11@gmail.com" passHref>
          <a className={styles.button}>Drop a Message</a>
        </Link>

        <small className={styles.or}>||</small>
        <div className={styles.socialWrap}>
          {Socials.map((link) => (
            <Link href={link.url} passHref key={link.url} title={link.name}>
              <a> {link.icon}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
