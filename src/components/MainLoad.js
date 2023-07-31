import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LoadFlex = styled.div`
  display: flex;
`;

const LoadBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.33%;
  height: 30px;

  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.$isTime ? "#fff" : "#333")};
  background-color: ${(props) =>
    props.$number === 1
      ? "var(--green1-color)"
      : props.$number === 2
      ? "var(--orange-color)"
      : props.$number === 3
      ? "var(--red-color)"
      : "white"};
  border-radius: ${(props) =>
    props.$number === 1
      ? "15px 0 0 15px"
      : props.$number === 3
      ? "0 15px 15px 0"
      : "0"};

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 20px;
    height: 20px;
    background-image: ${(props) =>
      props.$isTime ? 'url("/img/polygon.png")' : "none"};
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

// 경부하, 중부하, 최대부하 시간 계산
const MainLoad = () => {
  const [timeClass, setTimeClass] = useState(""); // 현재 시간대에 해당하는 클래스를 저장

  // 현재 시간과 월을 가져오기
  const getCurrentHourAndMonth = () => {
    const now = new Date();
    const hour = now.getHours(); // 시간(0 ~ 23)
    const month = now.getMonth() + 1; // 월(1 ~ 12) - getMonth()는 0부터 시작함에 주의
    return { hour, month };
  };

  // 현재 시간대에 해당하는 클래스를 설정
  const updateTimeClass = () => {
    const { hour, month } = getCurrentHourAndMonth();

    // 계절에 따라 시간대를 확인: 3월 1일부터 10월 31일까지
    if (month >= 3 && month <= 10) {
      if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour < 8)) {
        setTimeClass("time-1"); // 22시부터 8시까지 1번 클래스 설정
      } else if (
        (hour >= 8 && hour < 11) ||
        (hour >= 12 && hour < 13) ||
        (hour >= 18 && hour < 22)
      ) {
        setTimeClass("time-2"); // 8시부터 11시, 12시부터 13시, 18시부터 22시까지 2번 클래스 설정
      } else {
        setTimeClass("time-3"); // 나머지 시간대에는 3번 클래스 설정
      }
    }
    // 계절에 따라 시간대를 확인: 11월 1일부터 2월 마지막날까지
    else {
      if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour < 8)) {
        setTimeClass("time-1"); // 22시부터 8시까지 1번 클래스 설정
      } else if (
        (hour >= 8 && hour < 9) ||
        (hour >= 12 && hour < 16) ||
        (hour >= 19 && hour < 22)
      ) {
        setTimeClass("time-2"); // 8시부터 9시, 12시부터 16시, 19시부터 22시까지 2번 클래스 설정
      } else {
        setTimeClass("time-3"); // 나머지 시간대에는 3번 클래스 설정
      }
    }
  };

  useEffect(() => {
    updateTimeClass(); // 컴포넌트 마운트 시 한 번 실행
    const interval = setInterval(updateTimeClass, 3600000); // 1시간마다 실행
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 실행
  return (
    <LoadFlex>
      <LoadBar
        $number={1}
        $isTime={timeClass === "time-1"}
        className="progress-sd"
      ></LoadBar>
      <LoadBar
        $number={2}
        $isTime={timeClass === "time-2"}
        className="progress-sd"
      ></LoadBar>
      <LoadBar
        $number={3}
        $isTime={timeClass === "time-3"}
        className="progress-sd"
      ></LoadBar>
    </LoadFlex>
  );
};

export default MainLoad;
