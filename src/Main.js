import React from "react";
import TopBanner from "./components/TopBanner";
import MainLoad from "./components/MainLoad";

// import KWchart from "./components/KWchart";
import ChartTest from "./components/ChartTest";

const Main = () => {
  return (
    <main>
      <div className="container ma-sd">
        <TopBanner />
        <section className="main-m mtr30">
          <div className="m_contents con-flex ma-b20">
            <div className="rt-power-chart br15 box-sd con-itm itm">
              <div className="con-tit tit-sd br15-t">
                <h2 className="pd30">실시간 전력 사용량 (chart)</h2>
              </div>
              <div className="pd30">
                {/* <KWchart /> */}
                <ChartTest />
              </div>
            </div>

            <div className="rt-peak-chart br15 box-sd con-itm itm-r">
              <div className="con-tit tit-sd br15-t">
                <h2 className="pd30">실시간 유량</h2>
              </div>
            </div>
          </div>

          <div className="m_contents con-flex ma-b20">
            <div className="rt-power-chart br15 box-sd con-itm itm">
              <div className="con-tit tit-sd br15-t">
                <h2 className="pd30">부하 시간대 및 사용량</h2>
              </div>
              <div className="pd30">
                <MainLoad />
              </div>
            </div>

            <div className="rt-peak-chart br15 box-sd con-itm itm-r">
              <div className="con-tit tit-sd br15-t">
                <h2 className="pd30">실시간 가스</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
