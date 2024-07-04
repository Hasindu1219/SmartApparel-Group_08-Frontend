import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./styles.css";

const ExpenseController = () => {
  const [expensedata, setExpenseData] = useState([]);
  const navigate = useNavigate();

  const updateExpense = (id) => {
    navigate(`/accounting/updateexpense/${id}`);
  };

  const removeExpense = (id) => {
    console.log("Removing expense with ID:", id); // Check if id is logged correctly
    if (window.confirm("Do you want to remove?")) {
      axios
        .delete(`http://localhost:8080/api/v1/expense/deleteExpense/${id}`)
        .then((response) => {
          if (response.status === 202) {
            alert("Removed successfully.");
          } else {
            throw new Error("Failed to remove expense.");
          }
        })
        .catch((error) => {
          console.error("Error removing expense:", error.message);
        });
        window.location.reload();
    }
  };
  

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/expense/viewExpense")
      .then((response) => {
        setExpenseData(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex", backgroundColor: "#d7e3fc", alignItems: "center" }}>
        {/* Button to navigate back */}
        <Sidebar />
        <div className="container">
          <div className="card" style={{ backgroundColor: '#d7e3fc' }}>
            <Box height={30} />
            <div className="card-title" style={{ display: "flex", flexDirection: "row", marginLeft: "10px"}}>
              {/* Expense Listing title */}
              <button id="backBtnExpense" onClick={() => navigate("/accounting")}>
                <ArrowBackIcon /> 
              </button>
              <h2 style={{ marginLeft: "40px" }}>Expense Listing</h2>
            </div>
            <div className="card-body">
              <div className="divbtn">
                <button id="addBtnExpense">
                  <Link to="/accounting/addexpense" style={{ color: "inherit", textDecoration: "none" }}>
                    Add New (+)
                  </Link>
                </button>
              </div>
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Expense ID</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount(Rs.)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expensedata.map((item) => (
                    <tr key={item.expense_ID}>
                      <td>{item.expense_ID}</td>
                      <td>{item.category}</td>
                      <td>{item.date}</td>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>
                        <button
                          onClick={() => updateExpense(item.expense_ID)}
                          id="updateBtnExpense" 
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeExpense(item.expense_ID)}
                          id="deleteBtnExpense" 
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {expensedata.length === 0 && <p>Loading...</p>}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ExpenseController;