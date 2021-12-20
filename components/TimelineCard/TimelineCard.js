import React from "react";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

import styles from "./TimelineCard.module.css";

export default function TimelineCard({
  title,
  desc,
  timelineDot,
  cardStyle = {},
  ...rest
}) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0,0,0,0.5)",
        border: "2px solid  red",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  red" }}
      icon={timelineDot}
      {...rest}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </VerticalTimelineElement>
  );
}
