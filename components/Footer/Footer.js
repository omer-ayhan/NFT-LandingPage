import { Col, Row } from "antd";
import React from "react";

import contents from "../../contents";
import SmoothScroll from "../ScrollUtils/SmoothScroll";
import styles from "../Navbar/Navbar.module.css";
import stylesFooter from "./Footer.module.css";

export default function Footer() {
  const { socialLinks, bottomArrow, infoImage, logo } = contents.navbar;

  return (
    <div
      style={{
        padding: "24px 50px",
      }}>
      <Row align="middle">
        <Col
          style={{
            padding: "20px 0",
          }}
          xs={{ span: 24 }}
          lg={{ span: 8 }}
          justify="center"
          align="middle">
          <SmoothScroll
            toId={logo.link}
            duration={1500}
            style={{
              cursor: "pointer",
            }}>
            <img src={logo.url} alt="" />
          </SmoothScroll>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
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
                      className={`${stylesFooter.iconImage} ${stylesFooter.keybaseIcon}`}
                      src={icon}
                      alt="icon"
                    />
                    <img
                      className={stylesFooter.bottomArrow}
                      src={bottomArrow}
                      alt="arrow"
                    />
                  </a>
                ) : (
                  <img
                    key={`${index}#__#${icon}`}
                    className={`${stylesFooter.iconImage}`}
                    src={icon}
                    alt="icon"
                  />
                )}
              </span>
            ))}
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }} align="end" justify="end">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <h1
              style={{
                lineHeight: "1",
              }}>
              Follow
            </h1>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                style={{
                  width: "70px",
                }}
                src={contents.footer.rightImage}
                alt="twitter"
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
