import React from "react";
import { Col, Row } from "antd";

import stylesMain from "../../styles/Home.module.css";
import contents from "../../contents";
import FAQCard from "../FAQCard";
import SectionTitle from "../SectionTitle";

export default function FAQ() {
  const { backgroundImage, titleImage, desc, faqCards } = contents.faq;

  return (
    <div
      id="faq"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
      className={` ${stylesMain.innerSpacing}`}>
      <SectionTitle titleImage={titleImage} desc={desc} />
      <Row>
        {faqCards.map(({ title, desc }, index) => (
          <Col span={24}>
            <FAQCard title={title} desc={desc} dotText={`Q${index + 1}`} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
