import React from "react";
import { Col, Row } from "antd";

import styles from "./SectionTitle.module.css";

export default function SectionTitle({ titleImage, desc }) {
  return (
    <Row>
      <Col span={24} align="middle">
        <img src={titleImage} alt="Explore" className={styles.titleImage} />
      </Col>
      <Col span={24} align="middle">
        <p className={styles.description}>{desc} </p>
      </Col>
    </Row>
  );
}
