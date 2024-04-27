import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AttendanceTable =()=>{
    const navigate =useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [attendanceList, setAttendanceList] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredAttendanceList = attendanceList.filter(attendance => attendance.attendanceId.includes(searchQuery));

    useEffect(() => {
        axios.get('http://localhost:8080/attendance/view')
          .then((response) => {
            const { data } = response;
            if (data && data.content) {
                setAttendanceList(data.content);
                console.log(attendanceList);
            } else {
                console.error('Invalid response format:', data);
            }
        }).catch((error) => {
            console.error('Error fetching Attendance:', error);
        });
    }, []);
    
    const updateAttendance = (id) => {
        navigate(`/attendance/updateattendance/${id}`);
    };
    
    const handleDelete = (id) => {
    
        // Check if id is logged correctly
        console.log("Removing Attendance Record with ID:", id); 
    
        if (window.confirm("Are you sure you want to delete this Record?")) {
          axios.delete(`http://localhost:8080/attendance/delete/${id}`)
            .then((response) => {
              if (response.status === 202) {
                alert("Removed successfully.");
              } else {
                throw new Error("Failed to remove Record.");
              }
            })
            .catch((error) => {
              console.error("Error removing Attendance", error.message);
            });
            window.location.reload();
        }
    };

    return (
        <div>
            <Grid item sx={{ display: 'inline-flex',marginBottom: '1rem' }}>
                <Button onClick={()=>{navigate('/attendance/addattendance')}} >Add new Record</Button>

                <TextField
                    label="Search by Date"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    sx={{marginLeft:'800px' }}
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
                    
                    {/* {
                        "attendanceId": 2,
                        "date": "2024-04-19",
                        "inTime": "08:00:00",
                        "outTime": "17:00:00",
                        "empId": "emp001"
                    } */}
                    

                        {attendanceList.length > 0 ? (
                            attendanceList.map((attendance) => (
                                <TableRow key={attendance.attendanceId}>
                                    <TableCell>{attendance.attendanceId}</TableCell>
                                    <TableCell>{attendance.date}</TableCell>
                                    <TableCell>{attendance.inTime}</TableCell>
                                    <TableCell>{attendance.outTime}</TableCell>
                                    <TableCell>{attendance.empId}</TableCell>
                                    <TableCell>
                                        <Button sx={{ margin: '0px 10px' }} onClick={() => updateAttendance(attendance.attendanceId)}> 
                                            Update
                                        </Button>
                                        <Button sx={{ margin: '0px 10px' }} onClick={() => handleDelete(attendance.attendanceId)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={14} align="center">
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