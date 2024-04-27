import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AttendanceUpdate = ({Id}) => {
  const navigate = useNavigate();
//   const { Id } = useParams();

  // State for attendance record data and error messages
  const [attendanceRecord, setAttendanceRecord] = useState({
    attendanceId: '',
    date: '',
    inTime: '',
    outTime: '',
    employeeId: '',
  });

  const [errors, setErrors] = useState({});


  useEffect(() => {
    const fetchAttendanceRecordData = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/attendance/search/${Id}`);
        const fetchedAttendanceRecordData = response.data.content;

        setAttendanceRecord(fetchedAttendanceRecordData);

      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
     };

     fetchAttendanceRecordData();
  }, [Id]);

  const handleSubmit = async () => {
    try {
      const response = await axios.put("http://localhost:8080/attendance/update", attendanceRecord);

      if (response.status === 202) {
        alert("Attendance record updated successfully.");
        navigate("/attendance");
      } else {
        alert("Error occurred while updating attendance record.");
      }
    } catch (error) {
      alert("An error occurred while updating attendance record.");
      console.error("attendance record update error:", error);
    }
  };

  const handleReset = () => {
    // Reset attendance record data to original state
    setAttendanceRecord({
        ...attendanceRecord,
        attendanceId: '',
        date: '',
        inTime: '',
        outTime: '',
        employeeId: '',
    });

    // Clear all error messages
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendanceRecord((prevAttendanceRecord) => ({
      ...prevAttendanceRecord,
      [name]: value
    }));
  };


  return (
    <>
      <Grid>
        <Button onClick={() => navigate('/attendance')}>Back</Button>
      </Grid>

      <Grid container spacing={2} sx={{backgroundColor:'#EEEEEE', margin:'auto', display:'block'}}>
        <Grid>
          <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', textAlign: 'center' }}>Update Employee</Typography>
        </Grid>

        {/* Render form fields */}
        {Object.keys(attendanceRecord).map((field) => (
          <Grid key={field} item sx={{ display: 'flex' }}>
            <Typography component={'label'} htmlFor={field} sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
              {field === 'attendanceId' ? 'Attendance ID' : field}
            </Typography>
            <Input
              type="text"
              name={field}
              id={field}
              sx={{ width: '400px' }}
              value={attendanceRecord[field]}
              onChange={handleChange}
            />
            <Typography sx={{ color: 'red' }}>{errors[field]}</Typography>
          </Grid>
        ))}

        <Grid>
          <Button
            sx={{ margin: 'auto', backgroundColor: '#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover': { Opacity: '0.7', backgroundColor: '#00c6e6' } }}
            onClick={handleSubmit}
          >
            Update
          </Button>
          <Button
            sx={{ margin: 'auto', backgroundColor: '#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover': { Opacity: '0.7', backgroundColor: '#00c6e6' } }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AttendanceUpdate;
