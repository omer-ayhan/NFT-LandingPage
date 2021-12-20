import { Col, Row } from "antd";
import React from "react";
import SmoothScroll from "../ScrollUtils/SmoothScroll";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#000",
      }}>
      <Row>
        <Col
          style={{
            padding: "20px 0",
          }}
          span={24}
          justify="center"
          align="middle">
          <SmoothScroll
            toId="intro"
            duration={1500}
            style={{
              cursor: "pointer",
            }}>
            <img src="/images/navbar/LOGO.svg" alt="" />
          </SmoothScroll>
        </Col>
      </Row>
    </div>
  );
}
