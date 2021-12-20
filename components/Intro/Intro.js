import React from "react";
import { Col, Row } from "antd";

import Navbar from "../Navbar";
import styles from "./Intro.module.css";
import contents from "../../contents";
import stylesMain from "../../styles/Home.module.css";
import Timer from "../Timer";

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
                position: "relative",
                zIndex: "10",
              }}>
              <img
                className={styles.nftArrow}
                src="/images/intro/arrow_bg.svg"
                alt=""
              />
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
        <Timer setDays={1} />
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
