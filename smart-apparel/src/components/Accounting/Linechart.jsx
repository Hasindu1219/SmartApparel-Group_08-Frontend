import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2024 May", 1000, 400],
  ["2024 June", 1170, 460],
  ["2024 July", 660, 1120],
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
