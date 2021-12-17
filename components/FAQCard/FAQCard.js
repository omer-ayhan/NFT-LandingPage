import React from "react";

import { Card } from "antd";

import styles from "./FAQCard.module.css";

export default function FAQCard({ title, desc, dotText = "Q1" }) {
  return (
    <Card
      style={{
        postition: "relative",
        border: "2px solid #ff0000",
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginBottom: "80px",
      }}
      bodyStyle={{
        padding: "20px 35px",
      }}>
      <div
        className={styles.dot}
        style={{
          backgroundImage: "url(images/button/question_bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <span className={styles.dotText}>{dotText}</span>
      </div>
      <img className={styles.effect} src="images/faq/effect.png" alt="dot" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.listItem}>
        <b
          style={{
            fontSize: "20px",
            color: "#fff",
          }}>
          •
        </b>{" "}
        {desc}
      </p>
    </Card>
  );
}
