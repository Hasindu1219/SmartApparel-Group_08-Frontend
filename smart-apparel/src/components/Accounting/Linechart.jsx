import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export default function LineChart() {
  const [chartData, setChartData] = useState([["Month", "Sales", "Expenses"]]);

  // Function to fetch and process revenue data
  const fetchRevenueData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/revenue/viewRevenue"
      );
      if (response.data && Array.isArray(response.data.content)) {
        return response.data.content;
      } else {
        console.error("Unexpected revenue data format:", response.data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching revenue data:", error);
      return [];
    }
  };

  // Function to fetch and process expense data
  const fetchExpenseData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/expense/viewExpense"
      );
      if (response.data && Array.isArray(response.data.content)) {
        return response.data.content;
      } else {
        console.error("Unexpected expense data format:", response.data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching expense data:", error);
      return [];
    }
  };

  // Helper function to aggregate amounts by month
  const aggregateByMonth = (data, isRevenue = true) => {
    const aggregate = {};
    data.forEach((item) => {
      const date = new Date(item.date);
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      const key = `${year} ${month}`;
      if (!aggregate[key]) {
        aggregate[key] = { sales: 0, expenses: 0 };
      }
      if (isRevenue) {
        aggregate[key].sales += item.amount;
      } else {
        aggregate[key].expenses += item.amount;
      }
    });
    return aggregate;
  };

  // Function to merge revenue and expense data
  const mergeData = (revenue, expenses) => {
    const aggregatedRevenue = aggregateByMonth(revenue, true);
    const aggregatedExpenses = aggregateByMonth(expenses, false);

    const allKeys = new Set([
      ...Object.keys(aggregatedRevenue),
      ...Object.keys(aggregatedExpenses),
    ]);

    const mergedData = [["Month", "Sales", "Expenses"]];

    allKeys.forEach((key) => {
      mergedData.push([
        key,
        aggregatedRevenue[key]?.sales || 0,
        aggregatedExpenses[key]?.expenses || 0,
      ]);
    });

    return mergedData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const revenueData = await fetchRevenueData();
      const expenseData = await fetchExpenseData();
      const mergedData = mergeData(revenueData, expenseData);
      setChartData(mergedData);
    };

    fetchData();
  }, []);

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <Chart
      style={{ float: "left" }}
      chartType="LineChart"
      width="700px"
      height="400px"
      data={chartData}
      options={options}
    />
  );
}
