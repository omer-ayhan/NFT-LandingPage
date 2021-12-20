import React from "react";
import { Timeline } from "antd";

import styles from "./Roadmap.module.css";
import TimelineCard from "../TimelineCard";
import contents from "../../contents";

export default function CustomTimeline({
  timelineMode,
  cardStyle = {},
  dotStyle = {},
}) {
  const { timelineDot, timelines } = contents.roadmap;

  return (
    <Timeline mode={timelineMode}>
      {timelines.map(({ title, desc }, index) => (
        <Timeline.Item
          key={`${index}##${title}`}
          dot={
            <div
              className={styles.dotContainer}
              style={{
                backgroundImage: `url(${timelineDot})`,
                ...dotStyle,
              }}>
              <span className={styles.dotTitle}>Q{index + 1}</span>
            </div>
          }>
          <TimelineCard cardStyle={cardStyle} title={title} desc={desc} />
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
