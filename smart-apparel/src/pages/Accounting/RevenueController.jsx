import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const dummyExpenses = [
  {
    expense_ID: 1,
    date: "2024-03-01",
    description: "Sales",
    category: "Sales",
    amount: 50000.00
  },
  {
    expense_ID: 2,
    date: "2024-03-05",
    description: "other",
    category: "other",
    amount: 8000.00
  },
  {
    expense_ID: 3,
    date: "2024-03-10",
    description: "other",
    category: "other",
    amount: 40000.00
  },
  {
    expense_ID: 4,
    date: "2024-03-15",
    description: "sales",
    category: "sales",
    amount: 250000.00
  },
  {
    expense_ID: 5,
    date: "2024-03-20",
    description: "rent income",
    category: "Rent",
    amount: 12000.00
  },
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Rest_API_URL = "http://localhost:8080/api/v1/expense/viewExpense";

const RevenueController = () => {
  const [expenses, setExpenses] = useState([]);


  useEffect(() => {
    setExpenses(dummyExpenses);
  }, []);
  

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
    <>
    <div><h2><center>Receivable Details</center></h2></div>
    <TableContainer component={Paper} style={{ paddingTop: '65px', width: "95%" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Expense ID</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <StyledTableRow key={expense.expense_ID}>
              <StyledTableCell component="th" scope="row">
                {expense.expense_ID}
              </StyledTableCell>
              <StyledTableCell align="right">{expense.date}</StyledTableCell>
              <StyledTableCell align="right">{expense.description}</StyledTableCell>
              <StyledTableCell align="right">{expense.category}</StyledTableCell>
              <StyledTableCell align="right">{expense.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default RevenueController;
