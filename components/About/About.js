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
          WANTED
          <img
            className={styles.titleImage}
            src="/images/about/we-dont.svg"
            alt=""
          />
        </h1>
      </Row>
      <Row align="middle" gutter={10}>
        <Col span={16}>
          <p className={styles.aboutDesc}>
            WDW is a movement created to lift the veil from the{" "}
            <span className={styles.textIcon}>world's </span>
            eyes. We believe that no one has the right to infringe on your
            freedom for the sake of{" "}
            <span className={styles.securityWord}>security</span>, Mass
            Surveillance is not justified by the need for{" "}
            <span className={styles.intelligenceWord}>Intelligence</span>, that
            your voice mustn't be quieted. To express these views and champion
            the cause of freedom we bring you unique pieces of art, as NFTs,
            that will stir your sense of liberty and bring about the beginning
            of a grand movement. This is your chance to create value for
            yourself and the world - get your WDW NFTs and play your part in the{" "}
            <span className={styles.evolutionWord}>evolution</span>.
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
