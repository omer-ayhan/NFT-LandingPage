import React from "react";
import { Card } from "antd";

import styles from "./TimelineCard.module.css";

export default function TimelineCard({ title, desc, cardStyle = {} }) {
  return (
    <Card
      style={{
        margin: "0 50px",
        border: "2px solid #ff0000",
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        maxWidth: "400px",
        ...cardStyle,
      }}
      bodyStyle={{
        padding: "19px",
      }}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </Card>
  );
}
