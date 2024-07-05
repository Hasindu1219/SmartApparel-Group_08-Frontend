import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const AttendanceTable = () => {
    const navigate = useNavigate();
    const [searchEmpID, setSearchEmpID] = useState('');
    const [searchDate, setSearchDate] = useState(null);
    const [attendanceList, setAttendanceList] = useState([]);

    const filteredAttendanceList = attendanceList.filter(attendance => {
        const empIdMatch = searchEmpID === '' || attendance.empId.toString().includes(searchEmpID);
        const dateMatch = !searchDate || dayjs(attendance.date).isSame(searchDate, 'day');
        return empIdMatch && dateMatch;
    });

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
                <Button onClick={() => { navigate('/attendance/addattendance') }} variant="contained">Add new Record</Button>
                <Grid container justifyContent="space-between" xs={5}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Search by Date"
                            value={searchDate}
                            onChange={date => setSearchDate(date)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <TextField
                        label="Search by Employee ID"
                        variant="outlined"
                        value={searchEmpID}
                        onChange={e => setSearchEmpID(e.target.value)}
                    />
                </Grid>
            </Grid>

            <TableContainer component={Paper} style={{ marginBottom: '1rem' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{textAlign:"center",fontWeight:"bold"}}>Attendance ID</TableCell>
                            <TableCell sx={{textAlign:"center",fontWeight:"bold"}}>Date</TableCell>
                            <TableCell sx={{textAlign:"center",fontWeight:"bold"}}>IN Time</TableCell>
                            <TableCell sx={{textAlign:"center",fontWeight:"bold"}}>OUT Time</TableCell>
                            <TableCell sx={{textAlign:"center",fontWeight:"bold"}}>Employee ID</TableCell>
                            <TableCell sx={{textAlign:"center",fontWeight:"bold"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredAttendanceList.length > 0 ? (
                            filteredAttendanceList.map((attendance) => (
                                <TableRow key={attendance.attendanceId}>
                                    <TableCell sx={{textAlign:"center"}}>{attendance.attendanceId}</TableCell>
                                    <TableCell sx={{textAlign:"center"}}>{dayjs(attendance.date).format('YYYY-MM-DD')}</TableCell>
                                    <TableCell sx={{textAlign:"center"}}>{attendance.inTime}</TableCell>
                                    <TableCell sx={{textAlign:"center"}}>{attendance.outTime}</TableCell>
                                    <TableCell sx={{textAlign:"center"}}>{attendance.empId}</TableCell>
                                    <TableCell sx={{textAlign:"center"}}>
                                        <Button variant="outlined" size="small" color="primary" onClick={() => updateAttendance(attendance.attendanceId)}>
                                            Update
                                        </Button>
                                        <Button variant="outlined" size="small" color="error" onClick={() => handleDelete(attendance.attendanceId)} style={{ marginLeft: '10px' }}>
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
