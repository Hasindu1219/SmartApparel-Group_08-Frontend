import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";

function Search() {
  return (
    <div className="main">
      <h2>Search Customer</h2>
      <div className="search">
        <input
          id="outlined-basic"
          type="text"
          placeholder="Search..."
        />
        <button className="btn1" onClick={""}>
            Search
        </button>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Address</th>
              <th>Customer Email</th>
              <th>Customer Phone Number</th>
            </tr>
          </thead>
        <tbody>  
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default Search;
