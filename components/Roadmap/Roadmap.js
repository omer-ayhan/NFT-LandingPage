import React from "react";
import { Timeline } from "antd";

import styles from "./Roadmap.module.css";
import stylesMain from "../../styles/Home.module.css";
import contents from "../../contents";
import TimelineCard from "../TimelineCard";
import SectionTitle from "../SectionTitle";

const Roadmap = () => {
  const { titleImage, backgroundImage, timelineDot, timelines, desc } =
    contents.roadmap;
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
      <Timeline mode="alternate">
        {timelines.map(({ title, desc }, index) => (
          <Timeline.Item
            key={`${index}##${title}`}
            dot={
              <div
                className={styles.dotContainer}
                style={{
                  backgroundImage: `url(${timelineDot})`,
                }}>
                <span className={styles.dotTitle}>Q{index + 1}</span>
              </div>
            }>
            <TimelineCard title={title} desc={desc} />
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Roadmap;
