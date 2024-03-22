import React, { Component } from "react";
import "./HomePage.css";
import LineChart from "../../../components/Accounting/Linechart";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="firstPageContainer">
      <div className="cardContainerBox"></div>
      <div className="Inventory_Page">
        <div className="Bottons" float="left">
          
          <div className="Bottons">
            <Link to="/accounting/addexpense" className="btn">
              <p className="Task">Add Expense Details</p>
            </Link>
          </div>

          <div className="Bottons">
            <Link to="/accounting/viewexpense" className="btn">
              <p className="Task">View & Delete Expense Details</p>
            </Link>
          </div>

          <div className="Bottons">
            <Link to="/accounting/updateexpense" className="btn">
              <p className="Task">Update Expense Details</p>
            </Link>
          </div>

        </div>
        <div className="Graph" float="left">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
