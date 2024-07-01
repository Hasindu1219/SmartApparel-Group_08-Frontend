import React, { useState } from "react";
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SalaryTable({salaryList}){
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Handle the change in the search input
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query state
    };

    // Filter the salary list based on the search query
    const filteredSalaryList = salaryList.filter(salary => {
        // Ensure salary.salaryId is a string before calling includes
        const salaryIdStr = salary.empId ? salary.empId.toString() : '';
        return salaryIdStr.includes(searchQuery);
    });

    // Navigate to the update page with the selected salary ID
    const updateSalary = (id) => {
        navigate(`/salary/updatesalary/${id}`);
    };

    // Handle the deletion of a salary record
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this Record?")) {
            axios.delete(`http://localhost:8080/salary/delete/${id}`)
                .then((response) => {
                    if (response.status === 202) {
                        alert("Salary Record successfully Deleted");
                        // Reload data after successful deletion
                        window.location.reload();
                    } else {
                        throw new Error("Failed to delete Record.");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting Salary", error.message);
                });
        }
    };

    return (
        <div style={{borderRadius:"10px",padding:"5px",boxShadow:"0px 0px 10px gray"}}>
            <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: '1rem' }}>
                <Button variant="outlined" onClick={() => { navigate('/salary/addsalary') }}>Add New Salary Record</Button>
                <TextField
                    label="Search by Employee ID"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />

                <Box>
                    <TextField label="Enter Year-Month for auto calculate salary for ALL"></TextField>
                </Box>

            </Grid>

            <TableContainer component={Paper} style={{ marginBottom: '1rem' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Salary ID</TableCell>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Year & Month</TableCell>
                            <TableCell>Basic</TableCell>
                            <TableCell>EPF by Employee</TableCell>
                            <TableCell>EPF by Company</TableCell>
                            <TableCell>ETF Payment</TableCell>
                            <TableCell>Net Salary</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredSalaryList.length > 0 ? (
                            filteredSalaryList.map((salary) => (
                                <TableRow key={salary.salaryId}>
                                    <TableCell>{salary.salaryId}</TableCell>
                                    <TableCell>{salary.empId}</TableCell>
                                    <TableCell>{salary.status}</TableCell>
                                    <TableCell>{salary.yearNMonth}</TableCell>
                                    <TableCell>Rs.{salary.basic}</TableCell>
                                    <TableCell>Rs.{salary.epfByEmployee}</TableCell>
                                    <TableCell>Rs.{salary.epfByCompany}</TableCell>
                                    <TableCell>Rs.{salary.etfPayment}</TableCell>
                                    <TableCell>Rs.{salary.netSalary}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => updateSalary(salary.salaryId)}>
                                            Update
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => handleDelete(salary.salaryId)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="10" align="center">
                                    No Data
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default SalaryTable;
