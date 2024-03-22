import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

const MakeStocksChart = () => {
  //   useGetStockData();
  const stockDetailsData = useSelector((store) => store.oneStock);
  const givenData = stockDetailsData["oneStocks"];
  const givenSeries = [
    {
      data: givenData?.map((item) => {
        return {
          x: new Date(item.t),
          y: [item.o, item.h, item.l, item.c, item.n],
        };
      }),
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Past few months report",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <div className="p-20" id="chart">
        <Chart
          options={options}
          series={givenSeries}
          type="candlestick"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default MakeStocksChart;
