import { Button, Grid, Input, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function SalaryParameterAdd() {
    const [position, setPosition] = useState('');
    const [basicSalary, setBasicSalary] = useState('');
    const [epfByEmployee, setEpfByEmployee] = useState('');
    const [epfByCompany, setEpfByCompany] = useState('');
    const [etf, setEtf] = useState('');

    const [positionError, setPositionError] = useState('');
    const [basicSalaryError, setBasicSalaryError] = useState('');
    const [epfByEmployeeError, setEpfByEmployeeError] = useState('');
    const [epfByCompanyError, setEpfByCompanyError] = useState('');
    const [etfError, setEtfError] = useState('');

    const validatePosition = () => {
        if (!position.trim()) {
            setPositionError('Position is required');
            return false;
        }
        setPositionError('');
        return true;
    };

    const validateBasicSalary = () => {
        if (!basicSalary.trim() || isNaN(basicSalary) || Number(basicSalary) <= 0) {
            setBasicSalaryError('Valid basic salary is required');
            return false;
        }
        setBasicSalaryError('');
        return true;
    };

    const validateEpfByEmployee = () => {
        if (!epfByEmployee.trim() || isNaN(epfByEmployee) || Number(epfByEmployee) < 0) {
            setEpfByEmployeeError('Valid EPF by Employee is required');
            return false;
        }
        setEpfByEmployeeError('');
        return true;
    };

    const validateEpfByCompany = () => {
        if (!epfByCompany.trim() || isNaN(epfByCompany) || Number(epfByCompany) < 0) {
            setEpfByCompanyError('Valid EPF by Company is required');
            return false;
        }
        setEpfByCompanyError('');
        return true;
    };

    const validateEtf = () => {
        if (!etf.trim() || isNaN(etf) || Number(etf) < 0) {
            setEtfError('Valid ETF is required');
            return false;
        }
        setEtfError('');
        return true;
    };

    const handleSubmit = async () =>{
        if( validatePosition() && validateBasicSalary() && validateEpfByEmployee() && validateEpfByCompany() && validateEtf()){

            const newSalaryParam = {
                position:position,
                basicSalary:basicSalary,
                epfByEmployee:epfByEmployee,
                epfByCompany:epfByCompany,
                etf:etf
            }
            try {

                console.log(newSalaryParam);
                const response = await axios.post("http://localhost:8080/salary-params/add", newSalaryParam);

                if (response.data.code === '00') {
                    alert("Successfully added Salary Parameter");
                } else if (response.data.code === '06') {
                    // Duplicate or invalid request
                    alert("Position is already exists");
                } else {
                    // Other failure cases
                    alert(response.data.message);
                }
            } catch (error) {
                    console.error("Error occurred while Salary Parameter:", error);
                    alert("Error occurred while adding Salary Parameter.");
            }
        }else {
            // At least one validation failed
            alert("Please fill out all required fields");
        }
    }

    const handleReset = ()=>{
        setPosition('');
        setBasicSalary('');
        setEpfByEmployee('');
        setEpfByCompany('');
        setEtf('');

        setPositionError('');
        setBasicSalaryError('');
        setEpfByEmployeeError('');
        setEpfByCompanyError('');
        setEtfError('');
    }

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#EEEEEE', margin: 'auto', display: 'block' }}>
            <Grid item sx={{ display: 'flex', marginBottom: '16px' }}>
                <Typography component={'label'} htmlFor="position" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px' }}>
                    Position:
                </Typography>
                <Input type="text" name="position" id="position" sx={{ width: '400px' }} value={position} onChange={e => { setPosition(e.target.value) }} onBlur={validatePosition} />
                <Typography sx={{ color: 'red', marginLeft: '10px' }}>{positionError && positionError}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', marginBottom: '16px' }}>
                <Typography component={'label'} htmlFor="basicSalary" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px' }}>
                    Basic Salary:
                </Typography>
                <Input type="number" name="basicSalary" id="basicSalary" sx={{ width: '400px' }} value={basicSalary} onChange={e => { setBasicSalary(e.target.value) }} onBlur={validateBasicSalary} />
                <Typography sx={{ color: 'red', marginLeft: '10px' }}>{basicSalaryError && basicSalaryError}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', marginBottom: '16px' }}>
                <Typography component={'label'} htmlFor="epfByEmployee" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px' }}>
                    EPF by Employee:
                </Typography>
                <Input type="number" name="epfByEmployee" id="epfByEmployee" sx={{ width: '400px' }} value={epfByEmployee} onChange={e => { setEpfByEmployee(e.target.value) }} onBlur={validateEpfByEmployee} />
                <Typography sx={{ color: 'red', marginLeft: '10px' }}>{epfByEmployeeError && epfByEmployeeError}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', marginBottom: '16px' }}>
                <Typography component={'label'} htmlFor="epfByCompany" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px' }}>
                    EPF by Company:
                </Typography>
                <Input type="number" name="epfByCompany" id="epfByCompany" sx={{ width: '400px' }} value={epfByCompany} onChange={e => { setEpfByCompany(e.target.value) }} onBlur={validateEpfByCompany} />
                <Typography sx={{ color: 'red', marginLeft: '10px' }}>{epfByCompanyError && epfByCompanyError}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', marginBottom: '16px' }}>
                <Typography component={'label'} htmlFor="etf" sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px' }}>
                    ETF:
                </Typography>
                <Input type="number" name="etf" id="etf" sx={{ width: '400px' }} value={etf} onChange={e => { setEtf(e.target.value) }} onBlur={validateEtf} />
                <Typography sx={{ color: 'red', marginLeft: '10px' }}>{etfError && etfError}</Typography>
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
    );
}
