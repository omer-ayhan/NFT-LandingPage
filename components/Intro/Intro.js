import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";

import Navbar from "../Navbar";
import styles from "./Intro.module.css";
import contents from "../../contents";
import stylesMain from "../../styles/Home.module.css";
import SmoothScroll from "../ScrollUtils/SmoothScroll";
import TimerMain from "../Timer/TimerMain";

const Intro = () => {
  const { backgroundImage, introCard, imageBtn } = contents.intro;

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      id="intro"
      style={{
        paddingTop: scrolled ? "125px" : "0px",

        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
      className={stylesMain.innerSpacing}>
      <Row justify="center" align="middle">
        <Col span={24} align="middle" justify="center">
          <Navbar scrolled={scrolled} />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col xs={{ order: 2 }} lg={{ span: 15, order: 1 }}>
          <h1 className={styles.title}>
            Discover rare <br /> digital art <br /> and collect{" "}
            <b
              style={{
                padding: "10px",
                color: "red",
                backgroundImage: "url(/images/intro/arrow_bg.svg)",
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
        <TimerMain />
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
