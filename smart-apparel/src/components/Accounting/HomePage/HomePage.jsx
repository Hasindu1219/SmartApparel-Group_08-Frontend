import React from "react";
import "./HomePage.css";
import LineChart from "../Linechart";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="firstPageContainer">
      
      <div className="Inventory_Page">
        
        <div className="Bottons" float="left">
          
          <div className="Bottons">
            <Link to="/accounting/revenuecontroller" className="btns">
              <p className="Task">Manage Revenue</p>
            </Link>
          </div>

          <div className="Bottons">
            <Link to="/accounting/expensecontroller" className="btns">
              <p className="Task">Manage Expenses</p>
            </Link>
          </div>

        </div>
          <LineChart />
      </div>
    </div>
  );
}
