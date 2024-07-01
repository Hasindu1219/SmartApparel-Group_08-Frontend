import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SalaryUpdateForm = ({Id}) => {
  const navigate = useNavigate();

  // State for Salary record data 
  const [salaryRecord, setSalaryRecord] = useState({
    salaryId:'',
    empId:'',
    status:'',
    yearNMonth:'',
    basic:'',
    epfByEmployee:'',
    epfByCompany:'',
    etfPayment:'',
    netSalary:''
  });

  // State for error messages
  const [errors, setErrors] = useState({});


  useEffect(() => {
    const fetchSalaryRecordData = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/salary/search/${Id}`);
        const fetchedSalaryRecordData = response.data.content;

        setSalaryRecord(fetchedSalaryRecordData);

      } catch (error) {
        console.error("Error fetching salary data:", error);
      }
     };

     fetchSalaryRecordData();
  }, [Id]);

  const handleSubmit = async () => {
    try {
      const response = await axios.put("http://localhost:8080/salary/update", salaryRecord);

      if (response.status === 202) {
        alert("Salary record updated successfully.");
        navigate("/salary");
      } else {
        alert("Error occurred while updating salary record.");
      }
    } catch (error) {
      alert("An error occurred while updating salary record.");
      console.error("salary record update error:", error);
    }
  };

  const handleReset = () => {
    // Reset Salary record data to original state
    setSalaryRecord({
        ...salaryRecord,
        salaryId:'',
        empId:'',
        status:'',
        yearNMonth:'',
        basic:'',
        epfByEmployee:'',
        epfByCompany:'',
        etfPayment:'',
        netSalary:''
    });

    // Clear all error messages
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalaryRecord((prevSalaryRecord) => ({
      ...prevSalaryRecord,
      [name]: value
    }));
  };


  return (
    <>
      <Grid>
        <Button onClick={() => navigate('/salary')}>Back</Button>
      </Grid>

      <Grid container spacing={2} sx={{backgroundColor:'#EEEEEE', margin:'auto', display:'block'}}>
        <Grid>
          <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', textAlign: 'center' }}>Update Salary</Typography>
        </Grid>

        {/* Render form fields */}
        {Object.keys(salaryRecord).map((field) => (
          <Grid key={field} item sx={{ display: 'flex' }}>
            <Typography component={'label'} htmlFor={field} sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
              {field === 'salaryId' ? 'Salary ID' : field}
            </Typography>
            <Input
              type="text"
              name={field}
              id={field}
              sx={{ width: '400px' }}
              value={salaryRecord[field]}
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

export default SalaryUpdateForm;
