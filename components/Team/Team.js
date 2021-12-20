import React from "react";
import { Col, Row } from "antd";

import SectionTitle from "../SectionTitle";
import stylesMain from "../../styles/Home.module.css";
import contents from "../../contents";
import TeamCards from "../TeamCards";

export default function Team() {
  const { backgroundImage, titleImage, desc, teamCards } = contents.team;

  return (
    <div
      id="team"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        paddingBottom: "90px",
      }}
      className={` ${stylesMain.innerSpacing}`}>
      <SectionTitle titleImage={titleImage} desc={desc} />
      <Row>
        {teamCards.map(({ avatarBg, avatar, desc, avatarStyle }, index) => (
          <Col
            key={`${index}##__${index + 2}`}
            lg={{ span: 12 }}
            align="middle">
            <TeamCards
              avatarStyle={avatarStyle}
              backgroundImage={avatarBg}
              avatarImage={avatar}
              desc={desc}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
