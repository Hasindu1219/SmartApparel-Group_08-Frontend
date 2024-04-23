import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./styles.css";

const ExpenseAdd = () => {
//   const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const [expenseCategory, setExpenseCategory] = useState('');

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone, active };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#d7e3fc",
          alignItems: "center",
        }}
      >
        {/* Button to navigate back */}
        <Sidebar />
        <div className="container">
          <div className="card" style={{ backgroundColor: "#d7e3fc" }}>
            <Box height={30} />
            <div
              className="card-title"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
              }}
            >
              {/* Expense Listing title */}
              <button
                id="backBtnExpense"
                onClick={() => navigate("/accounting/expensecontroller")}
              >
                <ArrowBackIcon />
              </button>
              <h2 style={{ marginLeft: "40px" }}>Expense Addidng Form</h2>
            </div>

          <div className="row">
            <div className="offset-lg-2 col-lg-8">
              <form className="container" onSubmit={handlesubmit}>
                <div  style={{ textAlign: "left" }}>
                  <div className="card-body">
                    <div className="row">

                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="categorySelect">Category</label>
                            <select
                            id="categorySelect"
                            className="form-control"
                            value={expenseCategory}  // Set the selected value here
                            onChange={(e) => setExpenseCategory(e.target.value)}  // Handle change event to update the selected value
                            >
                            <option value="">Select a category...</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Water">Water</option>
                            <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>


                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Date</label>
                          <input type="date"
                            required
                            value={name}
                            onMouseDown={(e) => valchange(true)}
                            onChange={(e) => namechange(e.target.value)}
                            className="form-control"
                          ></input>
                          {name.length == 0 && validation && (
                            <span className="text-danger">Enter the name</span>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Description</label>
                          <input type="textarea"
                            required
                            value={email}
                            onChange={(e) => emailchange(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Currency</label>
                          <input type="currency"
                            required
                            value={phone}
                            onChange={(e) => phonechange(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button id="updateBtnExpense" type="submit">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        





          </div>
        </div>
      </Box>
    </>
  );
};

export default ExpenseAdd;
