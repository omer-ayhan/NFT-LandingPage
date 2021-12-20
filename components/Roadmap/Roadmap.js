import React from "react";
import { Grid } from "antd";

import styles from "./Roadmap.module.css";
import stylesMain from "../../styles/Home.module.css";
import contents from "../../contents";
import SectionTitle from "../SectionTitle";
import { VerticalTimeline } from "react-vertical-timeline-component";

import TimelineCard from "../TimelineCard";

const { useBreakpoint } = Grid;

const Roadmap = () => {
  const { titleImage, backgroundImage, desc, timelines, timelineDot } =
    contents.roadmap;
  const screen = useBreakpoint();

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
      <VerticalTimeline>
        {timelines.map(({ title, desc }, index) => (
          <TimelineCard
            timelineDot={
              <div
                className={styles.dotContainer}
                style={{
                  backgroundImage: `url(${timelineDot})`,
                }}>
                <span className={styles.dotTitle}>Q{index + 1}</span>
              </div>
            }
            iconStyle={{ boxShadow: "none" }}
            title={title}
            desc={desc}
          />
        ))}
      </VerticalTimeline>
      {/* {(screen.xs || screen.sm || screen.md) && !screen.lg ? (
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
      )} */}
    </div>
  );
};

export default Roadmap;
