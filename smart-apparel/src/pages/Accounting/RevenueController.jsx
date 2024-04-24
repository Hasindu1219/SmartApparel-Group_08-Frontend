import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const RevenueController = () => {
  const [revenuedata, setRevenueData] = useState([]);
  const navigate = useNavigate();

  const updateRevenue = (id) => {
    navigate(`/accounting/updaterevenue/${id}`);
  };


  const removeRevenue = (id) => {
    console.log("Removing revenue with ID:", id); // Check if id is logged correctly
    if (window.confirm("Do you want to remove?")) {
      axios
        .delete(`http://localhost:8080/api/v1/revenue/deleteRevenue/${id}`)
        .then((response) => {
          if (response.status === 202) {
            alert("Removed successfully.");
          } else {
            throw new Error("Failed to remove revenue.");
          }
        })
        .catch((error) => {
          console.error("Error removing revenue:", error.message);
        });
        window.location.reload();
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/revenue/viewRevenue")
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
            <div className="card-title" style={{ display: "flex", flexDirection: "row", marginLeft: "10px"}}>
              {/* Expense Listing title */}
              <button id="backBtnExpense" onClick={() => navigate("/accounting")}>
                <ArrowBackIcon /> 
              </button>
              <h2 style={{ marginLeft: "40px" }}>Revenue Listing</h2>
            </div>
            <div className="card-body">
              <div className="divbtn">
                <button id="addBtnExpense">
                  <Link to="/accounting/addrevenue" style={{ color: "inherit", textDecoration: "none" }}>
                    Add New (+)
                  </Link>
                </button>
              </div>
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Revenue ID</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {revenuedata.map((item) => (
                    <tr key={item.revenue_ID}>
                      <td>{item.revenue_ID}</td>
                      <td>{item.category}</td>
                      <td>{item.date}</td>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>
                        <button
                          onClick={() => updateRevenue(item.revenue_ID)}
                          id="updateBtnExpense" 
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeRevenue(item.revenue_ID)}
                          id="deleteBtnExpense" 
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
