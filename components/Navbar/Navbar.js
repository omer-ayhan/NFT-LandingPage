import { Button, Col, Drawer, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

import contents from "../../contents";
import SmoothScroll from "../ScrollUtils/SmoothScroll";
import styles from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { logo, navLinks, socialLinks, rightButton } = contents.navbar;

  return (
    <div>
      <Row align="middle" justify="space-around">
        <Col span={3} justify="middle" align="middle" gutter={1}>
          <img className={styles.logo} src={logo.url} alt="Logo" />
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
        <Col span={7} className={styles.desktopContainer}>
          <div className={styles.socialLinksContainer}>
            <img
              className={styles.info}
              src="/images/navbar/info.svg"
              alt="info"
            />

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
                      src="/images/navbar/bottom_arrow.svg"
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
