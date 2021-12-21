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
      <Row align="middle" justify="center" gutter={10}>
        <Col xs={{ order: 2 }} lg={{ span: 16, order: 1 }}>
          <h1 className={styles.title}>
            WANTED
            <img
              className={styles.titleImage}
              src="/images/about/we-dont.svg"
              alt=""
            />
          </h1>
          <p className={styles.aboutDesc}>
            WDW is a movement created to lift the veil from the{" "}
            <span
              style={{
                background: "url(/images/about/your.png) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "31px 13px 0px 0px",
              }}>
              world's
            </span>
            eyes. We believe that no one has the right to infringe on your
            freedom for the sake of{" "}
            <span
              style={{
                background: "url(/images/about/money.png) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "25px 10px 0px 0px",
              }}>
              security
            </span>
            , Mass Surveillance is not justified by the need for{" "}
            <span
              style={{
                background: "url(/images/about/security.png) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "25px 4px 0px 0px",
              }}>
              Intelligence
            </span>
            , that your voice mustn't be quieted. To express these views and
            champion the cause of freedom we bring you unique pieces of art, as
            NFTs, that will stir your sense of liberty and bring about the
            beginning of a grand movement. This is your chance to create value
            for yourself and the world - get your WDW NFTs and play your part in
            the{" "}
            <span
              style={{
                background: "url(/images/about/revolution.png) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "26px 21px 0px 0px",
              }}>
              evolution.
            </span>
          </p>
        </Col>
        <Col xs={{ order: 1 }} lg={{ span: 8, order: 2 }}>
          <img src={aboutCard} alt="Vandalism" className={styles.image} />
        </Col>
      </Row>
    </div>
  );
};

export default About;
