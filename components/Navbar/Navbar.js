import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

import contents from "../../contents";
import SmoothScroll from "../ScrollUtils/SmoothScroll";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logo, navLinks, socialLinks, rightButton } = contents.navbar;
  return (
    <div>
      <Row align="middle">
        <Col span={3} justify="middle" align="middle" gutter={1}>
          <SmoothScroll toId={logo.link} className={styles.navLinks}>
            <img className={styles.logo} src={logo.url} alt="Logo" />
          </SmoothScroll>
        </Col>
        <Col span={13} justify="middle">
          <div className={styles.navLinksContainer}>
            {navLinks.map(({ link, name }, index) => (
              <SmoothScroll
                toId={link}
                duration={1500}
                className={styles.navLinks}
                key={`${index}##${link}`}>
                {name}
              </SmoothScroll>
            ))}
          </div>
        </Col>
        <Col span={7}>
          <div className={styles.socialLinksContainer}>
            <img
              className={styles.info}
              src="/images/navbar/info.svg"
              alt="info"
            />

            {socialLinks.map(({ icon, link }, index) => (
              <span>
                {icon.includes("/images/navbar/keybase.png") ? (
                  <a
                    className={` ${styles.iconContainer}`}
                    href={link}
                    key={`${index}##${icon}`}
                    target="_blank">
                    <img
                      className={`${styles.iconImage} ${styles.keybaseIcon}`}
                      src={icon}
                      alt="icon"
                    />
                    <img
                      className={styles.bottomArrow}
                      src="/images/navbar/bottom_arrow.svg"
                      alt="arrow"
                    />
                  </a>
                ) : (
                  <img
                    key={`${index}##${icon}`}
                    className={`${styles.iconImage}`}
                    src={icon}
                    alt="icon"
                  />
                )}
              </span>
            ))}
            <span
              style={{
                position: "relative",
              }}>
              <span
                className={styles.rightButtonContainer}
                onClick={() => alert("clicked")}>
                <img
                  className={styles.rightButton}
                  src={rightButton.url}
                  alt="rightButton"
                />
              </span>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
