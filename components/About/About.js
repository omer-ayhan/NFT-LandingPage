import React from "react";

import contents from "../../contents";
import styles from "./About.module.css";
import stylesMain from "../../styles/Home.module.css";
import { Col, Row } from "antd";

const About = () => {
  const { backgroundImage, aboutCard } = contents.about;

  return (
    <div
      id="about"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
      className={`${styles.container} ${stylesMain.innerSpacing}`}>
      <Row align="middle">
        <h1 className={styles.title}>
          Who are the{" "}
          <b
            style={{
              color: "red",
            }}>
            Vandals NFT
          </b>
        </h1>
      </Row>
      <Row align="middle" gutter={10}>
        <Col span={16}>
          <p className={styles.aboutDesc}>
            Lorem Ipsum is simply <b style={{ color: "red" }}>Vandalism</b> text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type{" "}
            <b style={{ color: "red" }}>Street Art.</b> It has survived not only
            five centuries, but also he leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Col>
        <Col span={8}>
          <img src={aboutCard} alt="Vandalism" className={styles.image} />
        </Col>
      </Row>
    </div>
  );
};

export default About;
