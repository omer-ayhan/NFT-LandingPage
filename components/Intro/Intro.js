import React from "react";
import { Col, Row } from "antd";

import Navbar from "../Navbar";
import styles from "./Intro.module.css";
import contents from "../../contents";
import stylesMain from "../../styles/Home.module.css";
import Timer from "../Timer";
import SmoothScroll from "../ScrollUtils/SmoothScroll";

const Intro = () => {
  const { backgroundImage, introCard, imageBtn } = contents.intro;

  return (
    <div
      id="intro"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
      className={stylesMain.innerSpacing}>
      <Navbar />
      <Row align="middle" justify="center">
        <Col xs={{ order: 2 }} lg={{ span: 15, order: 1 }}>
          <h1 className={styles.title}>
            Discover rare <br /> digital art <br /> and collect{" "}
            <b
              style={{
                padding: "0 10px",
                color: "red",
                backgroundImage: 'url("/images/intro/arrow_bg.svg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "140px",
              }}>
              NFTs
            </b>
          </h1>
          <p className={styles.desc}>
            Lorem Ipsum is simply Vandalism text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Col>
        <Col xs={{ order: 1 }} lg={{ span: 9, order: 2 }}>
          <img className={styles.image} src={introCard} alt="intro" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h1 className={styles.comingSoon}>
            <b style={{ color: "red" }}>NFTs</b> Coming Soon
          </h1>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Timer setDays={1} />
        <Col span={24} align="middle">
          <SmoothScroll
            toId="roadmap"
            duration={1500}
            className={styles.discover}>
            <img
              style={{
                width: "20px",
                height: "20px",
                transform: "rotate(90deg)",
              }}
              src="/images/intro/discover_arrow.svg"
              alt="discover"
            />{" "}
            Discover Artworks
          </SmoothScroll>

          <SmoothScroll toId="roadmap" duration={1500}>
            <img className={styles.exploreBtn} src={imageBtn} alt="button" />
          </SmoothScroll>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
