import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AttendanceTable = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [attendanceList, setAttendanceList] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredAttendanceList = attendanceList.filter(attendance => attendance.attendanceId.toString().includes(searchQuery));

    useEffect(() => {
        axios.get('http://localhost:8080/attendance/view')
            .then((response) => {
                const { data } = response;
                if (data && data.content) {
                    setAttendanceList(data.content);
                } else {
                    console.error('Invalid response format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching Attendance:', error);
            });
    }, []);

    const updateAttendance = (id) => {
        navigate(`/attendance/updateattendance/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this Record?")) {
            axios.delete(`http://localhost:8080/attendance/delete/${id}`)
                .then((response) => {
                    if (response.status === 202) {
                        alert("Removed successfully.");
                        // Reload data after successful deletion
                        setAttendanceList(attendanceList.filter(item => item.attendanceId !== id));
                    } else {
                        throw new Error("Failed to remove Record.");
                    }
                })
                .catch((error) => {
                    console.error("Error removing Attendance", error.message);
                });
        }
    };

    return (
        <div>
            <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: '1rem' }}>
                <Button onClick={() => { navigate('/attendance/addattendance') }}>Add new Record</Button>
                <TextField
                    label="Search by ID"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </Grid>

            <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Attendance ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>IN Time</TableCell>
                            <TableCell>OUT Time</TableCell>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredAttendanceList.length > 0 ? (
                            filteredAttendanceList.map((attendance) => (
                                <TableRow key={attendance.attendanceId}>
                                    <TableCell>{attendance.attendanceId}</TableCell>
                                    <TableCell>{attendance.date}</TableCell>
                                    <TableCell>{attendance.inTime}</TableCell>
                                    <TableCell>{attendance.outTime}</TableCell>
                                    <TableCell>{attendance.empId}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => updateAttendance(attendance.attendanceId)}>
                                            Update
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => handleDelete(attendance.attendanceId)} style={{ marginLeft: '10px' }}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
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

export default AttendanceTable;
