import React, { Component } from "react";
import "./HomePage.css";
import LineChart from "../../../components/Accounting/Linechart";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="firstPageContainer">
      
      <div className="Inventory_Page">
        
        <div className="Bottons" float="left">
          
          <div className="Bottons">
            <Link to="/accounting/RevenueController" className="btns">
              <p className="Task">Manage Receivables</p>
            </Link>
          </div>

          <div className="Bottons">
            <Link to="/accounting/viewexpense" className="btns">
              <p className="Task">Manage Expenses</p>
            </Link>
          </div>

          <div className="Bottons">
            <Link to="/accounting/updateexpense" className="btns">
              <p className="Task">Generate Reports</p>
            </Link>
          </div>

        </div>
          <LineChart />
      </div>
    </div>
  );
}
