import React, { useState } from "react";
import { Button, Col, Drawer, Row } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import contents from "../../contents";
import styles from "./Navbar.module.css";
import SmoothScroll from "../ScrollUtils/SmoothScroll";

export default function MobileMenu() {
  const { navLinks, socialLinks, rightButton } = contents.navbar;

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        style={{
          border: "none",
          backgroundColor: "transparent",
        }}
        onClick={showDrawer}
        icon={
          <MenuOutlined
            style={{
              color: "#fff",
              fontSize: "1.8rem",
            }}
          />
        }
      />
      <Drawer
        closeIcon={
          <CloseOutlined
            style={{
              color: "#fff",
              fontSize: "1.8rem",
            }}
          />
        }
        width={270}
        destroyOnClose
        headerStyle={{
          backgroundColor: "#111",
          zIndex: "99999999999",
        }}
        bodyStyle={{
          backgroundColor: "#111",
          zIndex: "99999999999",
        }}
        placement="right"
        onClose={onClose}
        visible={visible}>
        <Row
          align="middle"
          justify="space-around"
          style={{
            paddingLeft: "1rem",
          }}>
          <Col span={24} justify="middle" align="start" gutter={1}>
            {socialLinks.map(({ icon, link }, index) => (
              <span
                key={`${index}#!!#${icon}`}
                style={{
                  position: "relative",
                  margin: "0 5px",
                }}>
                {icon.includes("/images/navbar/keybase.png") ? (
                  <a href={link} target="_blank" rel="noreferrer">
                    <img src={icon} alt="icon" />
                    <img
                      style={{
                        position: "absolute",
                        top: "30px",
                        left: "-35px",
                        height: "60px",
                      }}
                      src="/images/navbar/bottom_arrow.svg"
                      alt="arrow"
                    />
                  </a>
                ) : (
                  <img key={`${index}#!__#${icon}`} src={icon} alt="icon" />
                )}
              </span>
            ))}
          </Col>
        </Row>
        <Row
          align="middle"
          justify="space-around"
          style={{
            paddingTop: "1rem",
          }}>
          <Col span={24} justify="middle" align="start" gutter={1}>
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
          </Col>
        </Row>
        <Row align="middle" justify="space-around">
          {navLinks.map(({ link, name }, index) => (
            <Col
              key={`${index}##${link}`}
              span={24}
              justify="middle"
              align="start">
              <div
                style={{
                  margin: "5px 0",
                }}>
                <SmoothScroll
                  toId={link}
                  duration={1500}
                  style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}>
                  {name}
                </SmoothScroll>
              </div>
            </Col>
          ))}
        </Row>
      </Drawer>
    </>
  );
}
