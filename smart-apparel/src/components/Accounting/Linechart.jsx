import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses","Revenue"],
  ["2004", 1000, 400,100],
  ["2005", 1170, 460,400],
  ["2006", 660, 1120,700],
  ["2007", 1030, 540,845],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function LineChart() {
  return (
  <Chart style={{ float: 'left' }}
    chartType="LineChart"
    width="700px"
    height="400px"
    data={data}
    options={options}
  />
  
  );
}

function lineChartData()
{
  console.log(data);
}
