import React, { useEffect, useState } from "react";
import axios from "axios";

const KWchart = () => {
  const [chartData, setChartData] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "http://192.168.100.30:8090/api/ems/pub/com/2008/kw?device_list=1,2,3&start_date=2023-06-16%2000:00:00&end_date=2023-06-19%2000:00:00&filter=H"
      )
      .then((response) => {
        console.log("API 호출 성공:", response.data);

        // 만약 response.data가 객체 형태라면 배열로 변환
        const dataArray = Array.isArray(response.data)
          ? response.data
          : [response.data];

        // 데이터 처리 후 state에 저장
        const formattedData = dataArray.map((item) => ({
          date: new Date(item.date + "T" + item.time + ":00"),
          kw: item.firstKw,
        }));

        setChartData(formattedData);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 3600000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (chartData.length === 0) {
      // 초기 데이터가 없으면 차트 생성하지 않음
      return;
    }

    const chart = window.am5.create("chartDiv", window.am5.XYChart);
    const dateAxis = chart.xAxes.push(new window.am5.DateAxis());
    const valueAxis = chart.yAxes.push(new window.am5.ValueAxis());
    const series = chart.series.push(new window.am5.LineSeries());
    series.data = chartData;

    dateAxis.dataFields.date = "date";
    valueAxis.dataFields.valueY = "kw";

    chart.theme = window.am5themes_Animated;

    return () => {
      chart.dispose();
    };
  }, [chartData]);

  return <div id="chartDiv" style={{ width: "100%", height: "500px" }} />;
};

export default KWchart;
