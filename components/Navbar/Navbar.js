import { Col, Row } from "antd";
import React from "react";

import contents from "../../contents";
import SmoothScroll from "../ScrollUtils/SmoothScroll";
import styles from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";

export default function Navbar({ scrolled }) {
  const { logo, navLinks, socialLinks, rightButton, infoImage, bottomArrow } =
    contents.navbar;

  return (
    <div
      style={{
        ...(scrolled
          ? {
              width: "80%",
              padding: "0px 60px 0 0",
              position: "fixed",
              top: 0,
              backgroundColor: "rgb(0 0 0 / 90%)",
              zIndex: 121,
            }
          : {}),
        transition: "0.5s ease",
      }}>
      <Row align="middle" justify="space-around">
        <Col span={3} justify="middle" align="middle" gutter={1}>
          <SmoothScroll
            style={{
              paddingLeft: "0px",
            }}
            toId={"intro"}
            duration={1500}
            className={styles.navLinks}>
            <img className={styles.logo} src={logo.url} alt="Logo" />
          </SmoothScroll>
        </Col>
        <Col span={13} justify="middle" className={styles.desktopContainer}>
          <div className={styles.navLinksContainer}>
            {navLinks.map(({ link, name }, index) => (
              <SmoothScroll
                toId={link}
                duration={1500}
                className={styles.navLinks}
                key={`${index}!##!${link}`}>
                {name}
              </SmoothScroll>
            ))}
          </div>
        </Col>
        <Col span={8} className={styles.desktopContainer}>
          <div className={styles.socialLinksContainer}>
            <img className={styles.info} src={infoImage} alt="info" />

            {socialLinks.map(({ icon, link }, index) => (
              <span key={`${index}##${icon}`}>
                {icon.includes("/images/navbar/keybase.png") ? (
                  <a
                    className={` ${styles.iconContainer}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer">
                    <img
                      className={`${styles.iconImage} ${styles.keybaseIcon}`}
                      src={icon}
                      alt="icon"
                    />
                    <img
                      className={styles.bottomArrow}
                      src={bottomArrow}
                      alt="arrow"
                    />
                  </a>
                ) : (
                  <img
                    key={`${index}#__#${icon}`}
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
        <Col
          className={styles.mobileMenu}
          span={21}
          justify="end"
          align="end"
          style={{ padding: "30px 0" }}>
          <MobileMenu />
        </Col>
      </Row>
    </div>
  );
}
