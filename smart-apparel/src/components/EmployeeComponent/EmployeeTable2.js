import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id,name, calories, fat, carbs, protein) {
  return { id,name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,"Sujee Fonseka", "Female", "Supervisor", "07123684598", "Ring Road 2,Epz Katunayake, Gampaha"),
  createData(2,"Rathnayake Kotiduwakku", "Male", "Helper", "07123684598", "Kapugoda, Hanwella, Gampaha"),
  createData(3,"Adikari Mendis", "Male", "Manager", "07123684598", "Nagar, Ponnagar Kilinochchi, Kilinochchi"),
  createData(4,"Pamu Medhananda", "Female", "Accounting manager", "07123684598", "Dambulla Road, Palapathwala Jaffna, Mathale"),
  createData(5,"Lokunarangoda Senarath", "Male", "Helper", "07123684598", "Pothuarawa Road Malabe, Malabe"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">position</StyledTableCell>
            <StyledTableCell align="center">Telephone</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
