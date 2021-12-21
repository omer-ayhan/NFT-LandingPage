import React, { useEffect, useState } from "react";
import { Col } from "antd";

import styles from "./Timer.module.css";

function TimerMain() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year + 1}-1-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <>
      {!!timerComponents.length ? (
        <>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Days</p>
              <h1 className={styles.timer}>{days < 10 ? `0${days}` : days}</h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Hours</p>
              <h1 className={styles.timer}>
                {hours < 10 ? `0${hours}` : hours}
              </h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Minutes</p>
              <h1 className={styles.timer}>
                {minutes < 10 ? `0${minutes}` : minutes}
              </h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Seconds</p>
              <h1 className={styles.timer}>
                {seconds < 10 ? `0${seconds}` : seconds}
              </h1>
            </div>
          </Col>
        </>
      ) : (
        <>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Days</p>
              <h1 className={styles.timer}>00</h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Hours</p>
              <h1 className={styles.timer}>00</h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Minutes</p>
              <h1 className={styles.timer}>00</h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6 }}
            sm={{ span: 5 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}>
            <div className={styles.timerContainer}>
              <p className={styles.timerTitle}>Seconds</p>
              <h1 className={styles.timer}>00</h1>
            </div>
          </Col>
        </>
      )}
    </>
  );
}

export default TimerMain;
