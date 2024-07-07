import React, { useEffect, useState } from "react";
import { Button, FormControl, FormHelperText, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { FaCalculator } from "react-icons/fa";

function SalaryTable({ salaryList }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [autoCalYM, setAutoCalYM] = useState("");
    const [autoCalYMError, setAutoCalYMError] = useState("");
    const [cleared, setCleared] = useState(false);

    useEffect(() => {
        // if (cleared) {
        //   const timeout = setTimeout(() => {
        //     setCleared(false);
        //   }, 1500);

        //   return () => clearTimeout(timeout);
        // }
        // return () => {};
        if (cleared) {
            setAutoCalYMError("")
        }
    }, [cleared]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredSalaryList = salaryList.filter(salary => {
        const salaryIdStr = salary.empId ? salary.empId.toString() : '';
        return salaryIdStr.includes(searchQuery);
    });

    const updateSalary = (id) => {
        navigate(`/salary/updatesalary/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this Record?")) {
            axios.delete(`http://localhost:8080/salary/delete/${id}`)
                .then((response) => {
                    if (response.status === 202) {
                        alert("Salary Record successfully Deleted");
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const error = validateField('yearNMonth', autoCalYM);
        setAutoCalYMError(error);

        console.log("autoCalYM: " + autoCalYM)
        console.log("autoCalYMEror:" + autoCalYMError)
        console.log("Error:" + error)

        if (error === "") {
            try {
                const response = await axios.get(`http://localhost:8080/salary/calculate-all/${autoCalYM}`);
                console.log("Response: ", response)
                if (response.status === 202) {
                    alert("Auto Calculation for " + autoCalYM + " is Done");
                    window.location.reload();
                }
            } catch (error) {
                if (error.response && (error.response.status === 409 || error.response.status === 500)) {
                    alert("Error: " + error.response.data.message);
                    console.error(error);
                } else {
                    console.error("Error submitting form", error);
                    alert("Error submitting form: " + error.message);
                }
            }
        }
    };

    const validateField = (name, value) => {
        let error = "";
        const stringValue = String(value);

        if (!stringValue.trim()) {
            error = 'Field is required';
        } else if (name === "yearNMonth") {
            const selectedDate = dayjs(value, 'YYYY-MM');
            const currentDate = dayjs().startOf('month');
            if (selectedDate.isAfter(currentDate)) {
                error = 'Future year and month are not allowed';
            }
        }
        return error;
    };

    const handleDateChange = (date) => {
        const formattedDate = date ? dayjs(date).format('YYYY-MM') : '';
        setAutoCalYM(formattedDate);
        setAutoCalYMError(validateField('yearNMonth', formattedDate));
    };


    return (
        <div style={{ borderRadius: "10px", padding: "5px", boxShadow: "0px 0px 10px gray" }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Button variant="contained" onClick={() => { navigate('/salary/addsalary') }} style={{ fontWeight: "bold" }}>
                    Add New Salary Record
                </Button>

                <form onSubmit={handleSubmit}>
                    <FormControl size="small" error={!!autoCalYMError} >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                name="autoCalYM"
                                label="Month & Year for Auto Calculate"
                                views={['month', 'year']}
                                value={autoCalYM ? dayjs(autoCalYM, 'YYYY-MM') : null}
                                onChange={handleDateChange}
                                sx={{ width: 290 }}
                                slotProps={{
                                    textField: { size: "small" },
                                    field: { clearable: true, onClear: () => setCleared(true) }
                                }} /*InputLabelProps:{shrink:true}},*/
                            />
                        </LocalizationProvider>
                        <FormHelperText>{autoCalYMError}</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="outlined" sx={{ m: "1px", pl: 0, pr: 0, fontWeight: "bold" }}>
                        <FaCalculator style={{ width: "25px", height: "25px" }} />
                    </Button>
                </form>

                <TextField
                    size="small"
                    label="Search by Employee ID"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </Grid>
            <TableContainer component={Paper} style={{ marginBottom: '1rem' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {/* <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Salary ID</TableCell> */}
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Employee ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Year & Month</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Basic</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>OT</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>EPF by Employee</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>EPF by Company</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>ETF Payment</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Allowance 1</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Allowance 2</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Net Salary</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSalaryList.length > 0 ? (
                            filteredSalaryList.map((salary) => (
                                <TableRow key={salary.salaryId}>
                                    {/* <TableCell>{salary.salaryId}</TableCell> */}
                                    <TableCell sx={{ textAlign: "center" }}>{salary.empId}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{salary.status}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{salary.yearNMonth}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.basic}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.overTime}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.epfByEmployee}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.epfByCompany}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.etfPayment}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.allowance1}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.allowance2}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>Rs.{salary.netSalary}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        <Button variant="outlined" color="primary" style={{ fontWeight: "bold", margin: "0px 5px" }} size="small" onClick={() => updateSalary(salary.salaryId)}>
                                            Update
                                        </Button>
                                        <Button variant="outlined" color="error" style={{ fontWeight: "bold", margin: "0px 5px" }} size="small" onClick={() => handleDelete(salary.salaryId)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="13" align="center">
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
