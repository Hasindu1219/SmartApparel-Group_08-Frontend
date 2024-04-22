import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";


const RevenueController = () => {
  const [revenuedata, setRevenueData] = useState([]);
  const navigate = useNavigate();

//   const loadDetail = (id) => {
//     navigate(`/employee/detail/${id}`);
//   };

  const loadEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const removeExpense = (id) => {
    if (window.confirm("Do you want to remove?")) {
      axios
        .delete(`http://localhost:8080/api/v1/expense/${id}`)
        .then((response) => {
          if (response.status === 200) {
            alert("Removed successfully.");
            //fetchExpenseData();
          } else {
            throw new Error("Failed to remove expense.");
          }
        })
        .catch((error) => {
          console.error("Error removing expense:", error.message);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/expense/viewExpense")
      .then((response) => {
        setRevenueData(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex", backgroundColor: "#d7e3fc" }}>
        <Sidebar />
        <div className="container">
          <div className="card" style={{ backgroundColor: '#d7e3fc' }}>
            <Box height={30} />
            <div className="card-title">
              <h2>Revenue Listing</h2>
            </div>
            <div className="card-body">
              <div className="divbtn">
                <button className="btn btn-primary btn-sm">
                  <Link to="/employee/create" style={{ color: "inherit", textDecoration: "none" }}>
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
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {revenuedata.map((item) => (
                    <tr key={item.expense_ID}>
                      <td>{item.expense_ID}</td>
                      <td>{item.category}</td>
                      <td>{item.date}</td>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>
                        <button
                          onClick={() => loadEdit(item.expense_id)}
                          className="btn btn-success btn-sm" // Small-sized Edit button
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeExpense(item.expense_id)}
                          className="btn btn-danger btn-sm" // Small-sized Remove button
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {revenuedata.length === 0 && <p>Loading...</p>}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default RevenueController;
