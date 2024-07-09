import React from "react";
import "./HomePage.css";
import LineChart from "../Linechart";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="firstPageContainer">
      
      <div className="Inventory_Page">
        
        <div className="Buttons" float="left">
          
          <div className="Buttons">
            <Link to="/accounting/revenuecontroller" className="btns">
              <p className="Task">Manage Sales</p>
            </Link>
          </div>

          <div className="Buttons">
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
