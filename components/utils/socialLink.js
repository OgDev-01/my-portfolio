import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiDribbbleLine, RiInstagramFill } from "react-icons/ri";
import styles from "../../styles/headers/nav.module.scss";

export default function SocialLink() {
  const socials = [
    { name: "twitter", url: "", icon: <FaTwitter className={styles.tIcon} /> },
    {
      name: "github",
      url: "https://github.com/SunGoldTech",
      icon: <FaGithub className={styles.gIcon} />,
    },
    {
      name: "linkedin",
      url: "",
      icon: <FaLinkedinIn className={styles.lIcon} />,
    },
    {
      name: "instagram",
      url: "",
      icon: <RiInstagramFill className={styles.iIcon} />,
    },
    {
      name: "dribbble",
      url: "",
      icon: <RiDribbbleLine className={styles.dIcon} />,
    },
  ];

  return (
    <div className={styles.socialWrap}>
      {socials.map((social) => (
        <Link key={social.name} href={social.url} passHref>
          <a title={social.name}>{social.icon}</a>
        </Link>
      ))}
    </div>
  );
}
