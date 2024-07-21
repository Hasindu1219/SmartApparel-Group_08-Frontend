import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, MenuItem, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//apiMethod -> post , put
//submitBtnName -> Send , submit or any relevant
//resetBtnName -> clear , Reset or any relevant
//defaultFieldValues -> pass the employee object
function EmployeeForm({ apiMethod, submitBtnName, resetBtnName, defaultFieldValues }) {

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        empId: '',
        name: '',
        address: '',
        nic: '',
        position: '--Select the Position--',
        email: '',
        password: '',
        phoneNumber: '',
        dateOfBirth: '',
        accountNumber: '',
        holderName: '',
        branchName: '',
        bankName: ''
    });

    const [formErrors, setFormErrors] = useState({
        empId: '',
        name: '',
        address: '',
        nic: '',
        position: '',
        email: '',
        password: '',
        phoneNumber: '',
        dateOfBirth: '',
        accountNumber: '',
        holderName: '',
        branchName: '',
        bankName: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [salaryParams, setSalaryParams] = useState([]);
    const [submitBtnActiveState, setSubmitBtnActiveState] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/salary-params/view')
            .then((response) => {
                if (response.data.code === "00") {
                    //Successfully fetched all Salary Parameters
                    // console.log(response.data);
                    setSalaryParams(response.data.content)
                } else if (response.data.code === "01") {
                    //No records of Salary Parameters
                    alert("No added positions for employees");
                    // navigate("/employees");
                    setSubmitBtnActiveState(true);
                }
            }).catch((error) => {
                console.error("Error Fetching data:", error);
                alert("Error Fetching data: " + error.message);
                // navigate("/employees");
                setSubmitBtnActiveState(true);
            });
        if (defaultFieldValues) {
            setFormValues(defaultFieldValues);
        }
    }, [defaultFieldValues]);

    const validateField = (name, value) => {
        let error = '';

        if (!value.trim()) {
            error = 'Field is required';
        } else if (value.trim() !== value) {
            error = 'Begin and end with white spaces are not allowed';
        } else {
            if (name === 'empId') {
                if (!/^emp\d+$/.test(value)) {
                    error = 'Enter Correct Employee ID (empXXX)';
                }
            } else if (name === 'name') {
                if (!/^[a-zA-Z\s.]+$/.test(value)) {
                    error = 'Only letters, dots, and spaces between letters are allowed';
                }
            } else if (name === 'address') {
                if (!/^[a-zA-Z0-9\s,.-]+$/.test(value)) {
                    error = 'Address can contain only letters, numbers, spaces, commas, dots, and hyphens';
                }
            } else if (name === 'nic') {
                const nicRegex = /^(([5,6,7,8,9]{1})([0-9]{1})([0,1,2,3,5,6,7,8]{1})([0-9]{6})([vVxX]))|(([1,2]{1})([0,9]{1})([0-9]{2})([0,1,2,3,5,6,7,8]{1})([0-9]{7}))$/;
                if (!nicRegex.test(value)) {
                    error = 'Invalid NIC number';
                }
            } else if (name === 'position') {
                if (value === '--Select the Position--') {
                    error = 'Position is required';
                }
            } else if (name === 'email') {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Invalid email address';
                }
            } else if (name === 'password') {
                if (value.length < 8) {
                    error = 'Password must be at least 8 characters long';
                } else if (!/[A-Z]/.test(value)) {
                    error = 'Password must contain at least one uppercase letter';
                } else if (!/[a-z]/.test(value)) {
                    error = 'Password must contain at least one lowercase letter';
                } else if (!/[0-9]/.test(value)) {
                    error = 'Password must contain at least one number';
                } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    error = 'Password must contain at least one special character';
                }
            } else if (name === 'phoneNumber') {
                if (!/^[0]{1}[0-9]{9}$/.test(value)) {
                    error = 'Invalid, Format: 0 followed by 9 digits';
                }
            } else if (name === 'dateOfBirth') {
                const today = new Date();
                const dateOfBirth = new Date(value);
                const age = today.getFullYear() - dateOfBirth.getFullYear();
                const month = today.getMonth() - dateOfBirth.getMonth();
                if (isNaN(dateOfBirth.getTime())) {
                    error = 'Invalid date format';
                } else if (dateOfBirth > today) {
                    error = 'Date of Birth cannot be in the future';
                } else if (age < 18 || (age === 18 && month < 0)) {
                    error = 'You must be at least 18 years old';
                }
            } else if (name === 'accountNumber') {
                if (!/^\d+$/.test(value)) {
                    error = 'Account number must contain only digits';
                } else if (value.length < 10 || value.length > 12) {
                    error = 'Account number must be between 10 and 12 digits long';
                }
            } else if (name === 'holderName') {
                if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = 'Holder name can contain only letters and spaces';
                }
            } else if (name === 'branchName') {
                if (!/^[a-zA-Z0-9\s,.-]+$/.test(value)) {
                    error = 'Branch name can contain only letters, numbers, spaces, commas, dots, and hyphens';
                }
            } else if (name === 'bankName') {
                if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = 'Bank name can contain only letters and spaces';
                }
            }
        }
        return error;
    };

    const birthDateGenerate = (nicNumber) => {
        let year, dayCount;
        if (nicNumber.length === 10) {
            year = parseInt(nicNumber.slice(0, 2), 10);
            year = year < 21 ? 2000 + year : 1900 + year;
            dayCount = parseInt(nicNumber.slice(2, 5), 10);
        } else if (nicNumber.length === 12) {
            year = parseInt(nicNumber.slice(0, 4), 10);
            dayCount = parseInt(nicNumber.slice(4, 7), 10);
        } else {
            return '';
        }

        const isFemale = dayCount > 500;
        if (isFemale) {
            dayCount -= 500;
        }

        const date = new Date(year, 0);
        date.setDate(dayCount);

        return date.toISOString().split('T')[0];
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "nic") {
            const generatedBirthDate = birthDateGenerate(value);

            setFormValues({
                ...formValues,
                dateOfBirth: generatedBirthDate,
                [name]: value,
            });
            setFormErrors({
                ...formErrors,
                dateOfBirth: validateField('dateOfBirth', generatedBirthDate),
                [name]: validateField(name, value),
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value,
            });
            setFormErrors({
                ...formErrors,
                [name]: validateField(name, value),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;
        let newErrors = {};

        Object.keys(formValues).forEach(name => {
            const error = validateField(name, formValues[name]);
            if (error) {
                valid = false;
            }
            newErrors[name] = error;
        });

        setFormErrors(newErrors);

        if (valid) {
            try {
                const response = await axios[apiMethod]('http://localhost:8080/employees', formValues);
                if (response.data.code === "00") {
                    alert(response.data.message);
                    navigate("/employees");
                } else {
                    alert("Error: " + response.data.message);
                }
            } catch (error) {
                console.error("API Error:", error);
                alert("API Error: " + error.message);
            }
        }
    };

    const handleReset = () => {
        setFormValues({
            empId: '',
            name: '',
            address: '',
            nic: '',
            position: '--Select the Position--',
            email: '',
            password: '',
            phoneNumber: '',
            dateOfBirth: '',
            accountNumber: '',
            holderName: '',
            branchName: '',
            bankName: ''
        });
        setFormErrors({});
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <TextField
                    name="empId"
                    label="Employee ID"
                    value={formValues.empId}
                    onChange={handleChange}
                    error={!!formErrors.empId}
                    helperText={formErrors.empId}
                />
                <TextField
                    name="name"
                    label="Name"
                    value={formValues.name}
                    onChange={handleChange}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                />
                <TextField
                    name="address"
                    label="Address"
                    value={formValues.address}
                    onChange={handleChange}
                    error={!!formErrors.address}
                    helperText={formErrors.address}
                />
                <TextField
                    name="nic"
                    label="NIC"
                    value={formValues.nic}
                    onChange={handleChange}
                    error={!!formErrors.nic}
                    helperText={formErrors.nic}
                />
                <TextField
                    select
                    name="position"
                    label="Position"
                    value={formValues.position}
                    onChange={handleChange}
                    error={!!formErrors.position}
                    helperText={formErrors.position}
                >
                    <MenuItem value="--Select the Position--">--Select the Position--</MenuItem>
                    {salaryParams.map((param) => (
                        <MenuItem key={param.id} value={param.position}>{param.position}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    name="email"
                    label="Email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formValues.password}
                        onChange={handleChange}
                        name="password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {formErrors.password && <FormHelperText error>{formErrors.password}</FormHelperText>}
                </FormControl>
                <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    error={!!formErrors.phoneNumber}
                    helperText={formErrors.phoneNumber}
                />
                <TextField
                    name="dateOfBirth"
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formValues.dateOfBirth}
                    onChange={handleChange}
                    error={!!formErrors.dateOfBirth}
                    helperText={formErrors.dateOfBirth}
                />
                <TextField
                    name="accountNumber"
                    label="Account Number"
                    value={formValues.accountNumber}
                    onChange={handleChange}
                    error={!!formErrors.accountNumber}
                    helperText={formErrors.accountNumber}
                />
                <TextField
                    name="holderName"
                    label="Holder Name"
                    value={formValues.holderName}
                    onChange={handleChange}
                    error={!!formErrors.holderName}
                    helperText={formErrors.holderName}
                />
                <TextField
                    name="branchName"
                    label="Branch Name"
                    value={formValues.branchName}
                    onChange={handleChange}
                    error={!!formErrors.branchName}
                    helperText={formErrors.branchName}
                />
                <TextField
                    name="bankName"
                    label="Bank Name"
                    value={formValues.bankName}
                    onChange={handleChange}
                    error={!!formErrors.bankName}
                    helperText={formErrors.bankName}
                />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button type="submit" variant="contained" color="primary" disabled={submitBtnActiveState}>
                    {submitBtnName}
                </Button>
                <Button type="button" variant="outlined" onClick={handleReset}>
                    {resetBtnName}
                </Button>
            </Box>
        </form>
    );
}

export default EmployeeForm;
