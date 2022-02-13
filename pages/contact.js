import Image from "next/image";
import React from "react";
import { useState } from "react";
import styles from "../styles/pages/works.module.scss";
export default function Contact() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {};
  return (
    <div>
      {selectedImage ? (
        <Image
          alt="image"
          width={200}
          height={200}
          src={URL.createObjectURL(selectedImage)}
        />
      ) : (
        ""
      )}
      <input
        className={styles.input}
        type="file"
        name="image"
        onChange={(e) => {
          setSelectedImage(e.target.files[0]);
          console.log(URL.createObjectURL(e.target.files[0]));
        }}
      />
    </div>
  );
}
