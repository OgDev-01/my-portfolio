import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiDribbbleLine, RiInstagramFill } from "react-icons/ri";
import styles from "../../styles/headers/nav.module.scss";

export const Socials = [
  {
    name: "twitter",
    url: "https://twitter.com/O_sunday15",
    icon: <FaTwitter className={styles.tIcon} />,
  },
  {
    name: "github",
    url: "https://github.com/SunGoldTech",
    icon: <FaGithub className={styles.gIcon} />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ogbonna-sunday-06a86116b/",
    icon: <FaLinkedinIn className={styles.lIcon} />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/ogbonna1502/",
    icon: <RiInstagramFill className={styles.iIcon} />,
  },
  {
    name: "dribbble",
    url: "https://dribbble.com/Oliviamegan11",
    icon: <RiDribbbleLine className={styles.dIcon} />,
  },
];

export default function SocialLink() {
  return (
    <div className={styles.socialWrap}>
      {Socials.map((social) => (
        <Link key={social.name} href={social.url} passHref>
          <a title={social.name}>{social.icon}</a>
        </Link>
      ))}
    </div>
  );
}
