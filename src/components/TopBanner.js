import React from "react";
import Clock from "react-live-clock";
import { MdWifi } from "react-icons/md";
import { styled } from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--white1-color);
  line-height: 50px;
  border-bottom: 1xp solid #353739;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.5);
`;

const TBtit = styled.div`
  flex: 0 0 80%;
  padding-left: 30px;

  span {
    display: block;
    font-size: 15px;
    color: var(--green2-color);
  }
`;

const TBtime = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  background: #292c31;
  padding: 0 30px;
`;

const ClockContainer = styled.div``;

const TBconnect = styled.div`
  font-size: 25px;
  color: var(--green1-color);
  svg {
    vertical-align: middle;
  }
`;

const Top_Banner = () => {
  return (
    <Banner>
      <TBtit>
        <span>Energy Monitoring System</span>
      </TBtit>
      <TBtime>
        <TBconnect>
          <MdWifi />
        </TBconnect>

        <ClockContainer>
          <Clock
            format={"YYYY 년 MM 월 DD 일 HH:mm:ss"}
            ticking={true}
            timezone={"Asia/Seoul"}
          />
        </ClockContainer>
      </TBtime>
    </Banner>
  );
};

export default Top_Banner;
