import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeDeleteForm from "../../components/EmployeeComponent/EmployeeDeleteFrom";

const Rest_API_URL = "http://localhost:8080/api/v1/expense/viewExpense";

const DeleteEmployeeComponent = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(Rest_API_URL)
      .then((response) => {
        setExpenses(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Adding empty dependency array to ensure useEffect runs only once

  return (
    <div  style={{ paddingTop: '65px', width: "95%" }}>
      <h2 className="text-center"><center>Delete Employees</center></h2>
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Expense ID</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expense_ID}>
              <td style={{ color: "black" }}>{expense.expense_ID}</td>
              <td style={{ color: "black" }}>{expense.date}</td>
              <td style={{ color: "black" }}>{expense.description}</td>
              <td style={{ color: "black" }}>{expense.category}</td>
              <td style={{ color: "black" }}>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    <div>
        <EmployeeDeleteForm />
    </div>
    </div>
  );
};

export default DeleteEmployeeComponent;
