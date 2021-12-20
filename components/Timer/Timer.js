import React, { useEffect, useRef, useState } from "react";
import { Col } from "antd";

import styles from "./Timer.module.css";

export default function Timer({
  setDays = 0,
  setHours = 0,
  setMinutes = 0,
  setSeconds = 0,
}) {
  // countdown timer days, hours, minutes, seconds
  const [time, setTime] = useState({
    days: setDays,
    hours: setHours,
    minutes: setMinutes,
    seconds: setSeconds,
  });
  //   const [days, setDays] = useState(1);
  //   const [hours, setHours] = useState(2);
  //   const [minutes, setMinutes] = useState(3);
  //   const [seconds, setSeconds] = useState(3);

  // reference for the interval
  const intervalRef = useRef();
  const { days, hours, minutes, seconds } = time;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      //   const second = 1000;
      //   const minute = second * 60;
      //   const hour = minute * 60;
      //   const day = hour * 24;

      if (seconds > 0) {
        // setSeconds((seconds) => seconds - 1);
        setTime((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
      } else if (seconds === 0) {
        if (minutes > 0) {
          //   setMinutes((minutes) => minutes - 1);
          //   setSeconds(59);
          setTime((prevState) => ({
            ...prevState,
            minutes: prevState.minutes - 1,
            seconds: 59,
          }));
        } else if (minutes === 0) {
          if (hours > 0) {
            // setHours((hours) => hours - 1);
            // setMinutes(59);
            // setSeconds(59);
            setTime((prevState) => ({
              ...prevState,
              hours: prevState.hours - 1,
              minutes: 59,
              seconds: 59,
            }));
          } else if (hours === 0) {
            if (days > 0) {
              //   setDays((days) => days - 1);
              //   setHours(23);
              //   setMinutes(59);
              //   setSeconds(59);
              setTime((prevState) => ({
                ...prevState,
                days: prevState.days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
              }));
            } else {
              clearInterval(intervalRef.current);
            }
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
    //   }, [days, hours, minutes, seconds]);
  }, [time]);

  return (
    <>
      <Col span={3}>
        <div className={styles.timerContainer}>
          <p className={styles.timerTitle}>Days</p>
          <h1 className={styles.timer}>{days < 10 ? `0${days}` : days}</h1>
        </div>
      </Col>
      <Col span={3}>
        <div className={styles.timerContainer}>
          <p className={styles.timerTitle}>Hours</p>
          <h1 className={styles.timer}>{hours < 10 ? `0${hours}` : hours}</h1>
        </div>
      </Col>
      <Col span={3}>
        <div className={styles.timerContainer}>
          <p className={styles.timerTitle}>Minutes</p>
          <h1 className={styles.timer}>
            {minutes < 10 ? `0${minutes}` : minutes}
          </h1>
        </div>
      </Col>
      <Col span={3}>
        <div className={styles.timerContainer}>
          <p className={styles.timerTitle}>Seconds</p>
          <h1 className={styles.timer}>
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
      </Col>
    </>
  );
}
