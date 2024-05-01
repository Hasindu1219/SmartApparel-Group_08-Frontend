import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const SalaryAddPage = () => {

    // States for error messages
    const [empId, setEmpId] = useState('');
    const [status, setStatus] = useState('Pending');
    const [yearNMonth, setYearNMonth] = useState('');
    const [basic, setBasic] = useState('');
    const [epfByEmployee, setEpfByEmployee] = useState('');
    const [epfByCompany, setEpfByCompany] = useState('');
    const [etfPayment, setEtfPayment] = useState('');
    const [netSalary, setNetSalary] = useState('');

    // States for error messages
    const [empIdError, setEmpIdError] = useState('');
    const [statusError, setStatusError] = useState('');
    const [yearNMonthError, setYearNMonthError] = useState('');
    const [basicError, setBasicError] = useState('');
    const [epfByEmployeeError, setEpfByEmployeeError] = useState('');
    const [epfByCompanyError, setEpfByCompanyError] = useState('');
    const [etfPaymentError, setEtfPaymentError] = useState('');
    const [netSalaryError, setNetSalaryError] = useState('');


    //entered values for new salary record
    const newSalary = {
        empId:empId,
        status:status,
        yearNMonth:yearNMonth,
        basic:basic,
        epfByEmployee:epfByEmployee,
        epfByCompany:epfByCompany,
        etfPayment:etfPayment,
        netSalary:netSalary
    }

    // Validate employee ID
    const validateEmpId = () => {
        if (!empId.trim()) {
        setEmpIdError('Employee ID is required');
        return false;
        }
        setEmpIdError('');
        return true;
    };
  
    // Validate status
    const validateStatus = () => {
        if (!status.trim()) {
        setStatusError('Status is required');
        return false;
        }
        setStatusError('');
        return true;
    };
  
    // Validate year and month
    const validateYearNMonth = () => {
        if (!yearNMonth.trim()) {
        setYearNMonthError('Year and month are required');
        return false;
        }
        setYearNMonthError('');
        return true;
    };
    
    // Validate basic salary
    const validateBasic = () => {
        if (!basic.trim()) {
        setBasicError('Basic salary is required');
        return false;
        }
        if (isNaN(basic)) {
        setBasicError('Basic salary must be a number');
        return false;
        }
        setBasicError('');
        return true;
    };
    
    // Validate EPF by employee
    const validateEpfByEmployee = () => {
        if (!epfByEmployee.trim()) {
        setEpfByEmployeeError('EPF by employee is required');
        return false;
        }
        if (isNaN(epfByEmployee)) {
        setEpfByEmployeeError('EPF by employee must be a number');
        return false;
        }
        setEpfByEmployeeError('');
        return true;
    };
    
    // Validate EPF by company
    const validateEpfByCompany = () => {
        if (!epfByCompany.trim()) {
        setEpfByCompanyError('EPF by company is required');
        return false;
        }
        if (isNaN(epfByCompany)) {
        setEpfByCompanyError('EPF by company must be a number');
        return false;
        }
        setEpfByCompanyError('');
        return true;
    };
    
    // Validate ETF payment
    const validateEtfPayment = () => {
        if (!etfPayment.trim()) {
        setEtfPaymentError('ETF payment is required');
        return false;
        }
        if (isNaN(etfPayment)) {
        setEtfPaymentError('ETF payment must be a number');
        return false;
        }
        setEtfPaymentError('');
        return true;
    };
    
    // Validate net salary
    const validateNetSalary = () => {
        if (!netSalary.trim()) {
        setNetSalaryError('Net salary is required');
        return false;
        }
        if (isNaN(netSalary)) {
        setNetSalaryError('Net salary must be a number');
        return false;
        }
        setNetSalaryError('');
        return true;
    };
  

    const handleSubmit = async () => {
        // Resetting all error messages before validation
        setEmpIdError('');
        setStatusError('');
        setYearNMonthError('');
        setBasicError('');
        setEpfByEmployeeError('');
        setEpfByCompanyError('');
        setEtfPaymentError('');
        setNetSalaryError('');

        console.log(newSalary);

        if (validateEmpId() && validateStatus() && validateYearNMonth() && validateBasic() && validateEpfByEmployee() &&
            validateEpfByCompany() && validateEtfPayment() && validateNetSalary() ) {
            
            //If All validations passed
            try {

                console.log(newSalary);
                const response = await axios.post("http://localhost:8080/salary/add", newSalary);

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
        } else {
            // At least one validation failed
            alert("Please fill out all required fields");
            
        }
        
    }

    const handleReset = () => {
        // Resetting all state variables to empty strings
        setEmpId('');
        setStatus('');
        setYearNMonth('');
        setBasic('');
        setEpfByEmployee('');
        setEpfByCompany('');
        setEtfPayment('');
        setNetSalary('');

        // Resetting all error messages to empty strings
        setEmpIdError('');
        setStatusError('');
        setYearNMonthError('');
        setBasicError('');
        setEpfByEmployeeError('');
        setEpfByCompanyError('');
        setEtfPaymentError('');
        setNetSalaryError('');
    }

  return (
    <>
      <Grid container spacing={2} sx={{ backgroundColor: '#EEEEEE', margin: 'auto', display: 'block' }}>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="empid" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Emmployee ID:
          </Typography>
          <Input type="text" name="empid" id="empid" sx={{ width: '400px' }} value={empId} onChange={e => { setEmpId(e.target.value) }} onBlur={validateEmpId}/>
          <Typography sx={{ color: 'red' }}>{empIdError && empIdError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="status" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Status:
          </Typography>
          <Input type="text" name="status" id="status" sx={{ width: '400px' }} value={status} onChange={e => { setStatus(e.target.value) }} onBlur={validateStatus}/>
          <Typography sx={{ color: 'red' }}>{statusError && statusError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="ynm" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Year And Month:
          </Typography>
          <Input type="text" name="yearNMonth" id="ynm" sx={{ width: '400px' }} value={yearNMonth} onChange={e => { setYearNMonth(e.target.value) }} onBlur={validateYearNMonth}/>
          <Typography sx={{ color: 'red' }}>{yearNMonthError && yearNMonthError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="basic" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Basic:
          </Typography>
          <Input type="number" name="basic" id="basic" sx={{ width: '400px' }} value={basic} onChange={e => { setBasic(e.target.value) }} onBlur={validateBasic}/>
          <Typography sx={{ color: 'red' }}>{basicError && basicError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="epfemp" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            EPF By Employee:
          </Typography>
          <Input type="number" name="epfByEmp" id="epfemp" sx={{ width: '400px' }} value={epfByEmployee} onChange={e => { setEpfByEmployee(e.target.value) }} onBlur={validateEpfByEmployee}/>
          <Typography sx={{ color: 'red' }}>{epfByEmployeeError && epfByEmployeeError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="epfCmpny" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            EPF By Company:
          </Typography>
          <Input type="number" name="epfByCmpny" id="epfCmpny" sx={{ width: '400px' }} value={epfByCompany} onChange={e => { setEpfByCompany(e.target.value) }} onBlur={validateEpfByCompany}/>
          <Typography sx={{ color: 'red' }}>{epfByCompanyError && epfByCompanyError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="etf" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            ETF Payment:
          </Typography>
          <Input type="number" name="etf" id="etf" sx={{ width: '400px' }} value={etfPayment} onChange={e => { setEtfPayment(e.target.value) }} onBlur={validateEtfPayment}/>
          <Typography sx={{ color: 'red' }}>{etfPaymentError && etfPaymentError}</Typography>
        </Grid>

        <Grid item sx={{ display: 'flex' }}>
          <Typography component={'label'} htmlFor="netSal" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
            Net Salary:
          </Typography>
          <Input type="number" name="netSal" id="netSal" sx={{ width: '400px' }} value={etfPayment} onChange={e => { setNetSalary(e.target.value) }} onBlur={validateNetSalary}/>
          <Typography sx={{ color: 'red' }}>{netSalaryError && netSalaryError}</Typography>
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

export default SalaryAddPage;
