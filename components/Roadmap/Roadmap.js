import React from "react";
import { Grid } from "antd";

import styles from "./Roadmap.module.css";
import stylesMain from "../../styles/Home.module.css";
import contents from "../../contents";
import SectionTitle from "../SectionTitle";
import Timeline from "./Timeline";

const { useBreakpoint } = Grid;

const Roadmap = () => {
  const { titleImage, backgroundImage, desc } = contents.roadmap;
  const screen = useBreakpoint();

  console.log(screen);

  return (
    <div
      id="roadmap"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
      className={` ${stylesMain.innerSpacing} ${styles.container}`}>
      <SectionTitle titleImage={titleImage} desc={desc} />
      {(screen.xs || screen.sm || screen.md) && !screen.lg ? (
        <Timeline
          dotStyle={{
            marginLeft: "20px",
          }}
          cardStyle={{
            margin: "0 0 0 50px",
          }}
          timelineMode="left"
        />
      ) : (
        <Timeline timelineMode="alternate" />
      )}
    </div>
  );
};

export default Roadmap;
