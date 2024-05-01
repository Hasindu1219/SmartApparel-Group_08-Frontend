import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const EmployeeAddPage = () => {

  // States for fields
  const [date, setDate] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  // States for error messages
  const [dateError, setDateError] = useState('');
  const [inTimeError, setInTimeError] = useState('');
  const [outTimeError, setOutTimeError] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState('');

  //entered values for new employee
  const newAttendance = {
    date: date,
    inTime: inTime,
    outTime: outTime,
    empId: employeeId,
  }

  // Validate date
  const validateDate = () => {
    if (!date.trim()) {
      setDateError('Date is required');
      return false;
    }
    
    setDateError('');
    return true;
  };

  // Validate inTime
  const validateInTime = () => {
    if (!inTime.trim()) {
      setInTimeError('In Time is required');
      return false;
    }
    
    setInTimeError('');
    return true;
  };

  // Validate outTime
  const validateOutTime = () => {
    if (!outTime.trim()) {
      setOutTimeError('Out Time is required');
      return false;
    }
    
    setOutTimeError('');
    return true;
  };

  // Validate employeeId
  const validateEmployeeId = () => {
    if (!employeeId.trim()) {
      setEmployeeIdError('Employee ID is required');
      return false;
    }

    setEmployeeIdError('');
    return true;
  };


  const handleSubmit = async () => {
    // Resetting all error messages before validations
    setDateError('');
    setInTimeError('');
    setOutTimeError('');
    setEmployeeIdError('');

    if(validateDate() && validateInTime() && validateOutTime() && validateEmployeeId()){
      try {
        console.log(newAttendance);
        const response = await axios.post("http://localhost:8080/attendance/add", newAttendance);

        if (response.status === 202) {
          alert("New Attendance Record added successfully");
        } else if (response.status === 400) {
          // Duplicate or invalid request
          alert("Attendance already exists or invalid request.");
        } else {
          // Other failure cases
          alert("Error occurred while saving Attendance Record.");
        }
      } catch (error) {
        console.error("Error occurred while adding attendance:", error);
        alert("Error occurred while adding attendance.");
      }
    }
    
  }

  const handleReset = () => {
    // Resetting all state variables to empty strings
    setDate('');
    setInTime('');
    setOutTime('');
    setEmployeeId('');

    // Resetting all error messages to empty strings
    setDateError('');
    setInTimeError('');
    setOutTimeError('');
    setEmployeeIdError('');
  }

  return (
    <>
      <Grid container spacing={2} sx={{ backgroundColor: '#EEEEEE', margin: 'auto', display: 'block' }}>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="date" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Date:
          </Typography>
          <Input type="date" name="date" id="date" sx={{ width: '400px' }} value={date} onChange={e => { setDate(e.target.value) }} onBlur={validateDate}/>
          <Typography sx={{ color: 'red' }}>{dateError && dateError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="inTime" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            IN Time:
          </Typography>
          <Input type="text" name="inTime" id="inTime" sx={{ width: '400px' }} value={inTime} onChange={e => { setInTime(e.target.value) }} onBlur={validateInTime}/>
          <Typography sx={{ color: 'red' }}>{inTimeError && inTimeError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="outTime" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            OUT Time:
          </Typography>
          <Input type="text" name="outTime" id="outTime" sx={{ width: '400px' }} value={outTime} onChange={e => { setOutTime(e.target.value) }} onBlur={validateOutTime}/>
          <Typography sx={{ color: 'red' }}>{outTimeError && outTimeError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="employeeId" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Employee ID:
          </Typography>
          <Input type="text" name="employeeId" id="employeeId" sx={{ width: '400px' }} value={employeeId} onChange={e => { setEmployeeId(e.target.value) }} onBlur={validateEmployeeId}/>
          <Typography sx={{ color: 'red' }}>{employeeIdError && employeeIdError}</Typography>
        </Grid>

        <Grid>
          <Button
            sx={{ margin: 'auto', backgroundColor: '#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover': { Opacity: '0.7', backgroundColor: '#00c6e6' } }}
            onClick={handleSubmit}>
            ADD
          </Button>
          <Button
            sx={{ margin: 'auto', backgroundColor: '#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover': { Opacity: '0.7', backgroundColor: '#00c6e6' } }}
            onClick={handleReset}>
            CLEAR
          </Button>
        </Grid>

      </Grid>


    </>

  );
}

export default EmployeeAddPage;
