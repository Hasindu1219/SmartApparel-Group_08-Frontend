import React, { useState, useEffect } from "react";
import axios from "axios";


const Rest_API_URL = "http://localhost:8080/api/v1/expense/viewExpense";

const ListExpensesComponent = () => {

  const expenses = [
    { expense_ID: 1, name: "Munasinghe Weeraratne", tp: "0771234567", position: "Production Manager", gender: "Male" },
    { expense_ID: 2, name: "Nadeesha Lankage", tp: "0712345678", position: "Helper", gender: "Female" },
    { expense_ID: 3, name: "Sudarshana Ponnamperuma", tp: "0763456789", position: "Helper", gender: "Female" },
    { expense_ID: 4, name: "Inunil Illangasinghe", tp: "0784567890", position: "HR manager", gender: "Male" },
    { expense_ID: 5, name: "Kishan Dharsha", tp: "0755678901", position: "Supervisor", gender: "Male" }
  ];

  // const [expenses, setExpenses] = useState([]);

  // useEffect(() => {
  //   axios.get(Rest_API_URL)
  //     .then((response) => {
  //       setExpenses(response.data.content);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []); // Adding empty dependency array to ensure useEffect runs only once

  return (
    <div  style={{ paddingTop: '65px', width: "95%" }}>
      {/* <h2 className="text-center"><center></center></h2> */}
      <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">TP</th>
        <th scope="col">Position</th>
        <th scope="col">Gender</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense) => (
        <tr key={expense.expense_ID}>
          <td style={{ color: "black" }}>{expense.expense_ID}</td>
          <td style={{ color: "black" }}>{expense.name}</td>
          <td style={{ color: "black" }}>{expense.tp}</td>
          <td style={{ color: "black" }}>{expense.position}</td>
          <td style={{ color: "black" }}>{expense.gender}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
};

export default ListExpensesComponent;
