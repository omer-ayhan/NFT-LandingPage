import React from "react";

import styles from "./TeamCards.module.css";

export default function TeamCards({
  backgroundImage,
  avatarImage,
  desc,
  avatarStyle,
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <img
          style={avatarStyle}
          src={avatarImage}
          alt="Explore"
          className={styles.avatar}
        />
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
