import React from "react";
import { Col, Row } from "antd";

import Navbar from "../Navbar";
import styles from "./Intro.module.css";
import contents from "../../contents";
import stylesMain from "../../styles/Home.module.css";

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
      <Row align="middle">
        <Col span={15}>
          <h1 className={styles.title}>
            Discover rare <br /> digital art <br /> and collect{" "}
            <b
              style={{
                color: "red",
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
        <Col span={9}>
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
        <Col span={3}>
          <div className={styles.timerContainer}>
            <p className={styles.timerTitle}>Days</p>
            <h1 className={styles.timer}>01</h1>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.timerContainer}>
            <p className={styles.timerTitle}>Hours</p>
            <h1 className={styles.timer}>09</h1>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.timerContainer}>
            <p className={styles.timerTitle}>Minutes</p>
            <h1 className={styles.timer}>40</h1>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.timerContainer}>
            <p className={styles.timerTitle}>Seconds</p>
            <h1 className={styles.timer}>08</h1>
          </div>
        </Col>
        <Col span={24} align="middle">
          <a href="#" className={styles.discover}>
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
          </a>

          <a href="#roadmap">
            <img className={styles.exploreBtn} src={imageBtn} alt="button" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
