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
//resetBtnName -> clear , Rset or any relevent
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

    useEffect(() => {
        if (defaultFieldValues) {
            setFormValues(defaultFieldValues);
        }
    }, [defaultFieldValues]);

    const validateField = (name, value) => {
        let error = '';
        if (name === 'empId') {
            if (!value.trim()) {
                error = 'Employee ID is required';
            } else if (!/^emp\d+$/.test(value)) {
                error = 'Enter Correct Employee ID (empXXX)';
            }
        } else if (name === 'name') {
            if (!value.trim()) {
                error = 'Name is required';
            } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
                error = 'Only letters, dots, and spaces between letters are allowed';
            } else if (value.trim() !== value) {
                error = 'Begin and end with white spaces are not allowed';
            }
        } else if (name === 'address') {
            if (!value.trim()) {
                error = 'Address is required';
            } else if (!/^[a-zA-Z0-9\s,.-]+$/.test(value)) {
                error = 'Address can contain only letters, numbers, spaces, commas, dots, and hyphens';
            } else if (value.trim() !== value) {
                error = 'Begin and end with white spaces are not allowed';
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
            if (!value.trim()) {
                error = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = 'Invalid email address';
            }
        } else if (name === 'password') {
            if (!value.trim()) {
                error = 'Password is required';
            } else if (value.length < 8) {
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
            if (!value.trim()) {
                error = 'Phone number is required';
            } else if (!/^[0]{1}[0-9]{9}$/.test(value)) {
                error = 'Invalid, Format: 0 followed by 9 digits';
            }
        } else if (name === 'dateOfBirth') {
            if (!value.trim()) {
                error = 'Date of Birth is required';
            } else {
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
            }
        } else if (name === 'accountNumber') {
            if (!value.trim()) {
                error = 'Account number is required';
            } else if (!/^\d+$/.test(value)) {
                error = 'Account number must contain only digits';
            } else if (value.length < 10 || value.length > 12) {
                error = 'Account number must be between 10 and 12 digits long';
            }
        } else if (name === 'holderName') {
            if (!value.trim()) {
                error = 'Holder name is required';
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                error = 'Holder name can contain only letters and spaces';
            } else if (value.trim() !== value) {
                error = 'Begin and end with white spaces are not allowed';
            }
        } else if (name === 'branchName') {
            if (!value.trim()) {
                error = 'Branch name is required';
            } else if (!/^[a-zA-Z0-9\s,.-]+$/.test(value)) {
                error = 'Branch name can contain only letters, numbers, spaces, commas, dots, and hyphens';
            } else if (value.trim() !== value) {
                error = 'Begin and end with white spaces are not allowed';
            }
        } else if (name === 'bankName') {
            if (!value.trim()) {
                error = 'Bank name is required';
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                error = 'Bank name can contain only letters and spaces';
            } else if (value.trim() !== value) {
                error = 'Begin and end with white spaces are not allowed';
            }
        }
        return error;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: validateField(name, value),
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;
        let newErrors = {};

        Object.keys(formValues).forEach(name => {
            const error = validateField(name, formValues[name]);
            if (error) {
                valid = false;
                newErrors[name] = error;
            }
        });

        setFormErrors(newErrors);

        if (valid && apiMethod === "post") {
            console.log("Object is ready to send backend, no errors in fields");
            try {
                const response = await axios.post("http://localhost:8080/employee/add", formValues);
                console.log("Response: ", response);
                // alert(response.data.message);
                if (response.status === 202) {
                    alert("New employee added successfully");
                } else if (response.status === 400) {
                    alert("Employee already exists or invalid request.");
                } else {
                    alert("Error occurred while saving employee: " + response.data.message);
                }
            } catch (error) {
                console.error("Error submitting form", error);
                alert("Error occurred while saving employee.");
            }
        }
        else if (valid && apiMethod === "put") {
            if (defaultFieldValues === formValues) {
                alert("There is no change to update!")
            } else {
                try {
                    const response = await axios.put("http://localhost:8080/employee/update", formValues);

                    if (response.status === 202) {
                        alert("Employee updated successfully.");
                        navigate("/employees");
                    } else {
                        alert("Error occurred while updating employee.");
                    }
                } catch (error) {
                    alert("An error occurred while updating employee.");
                    console.error("Employee update error:", error);
                }
            }
        }
    };

    const handleClear = () => {
        if (apiMethod === "post") {
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
            setFormErrors({
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
        }
        else if (apiMethod === "put") {
            setFormErrors({});
            setFormValues(defaultFieldValues);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const fields = [
        { name: 'empId', label: 'Employee ID', required: true },
        { name: 'name', label: 'Employee Name', required: true },
        { name: 'address', label: 'Address', required: true },
        { name: 'nic', label: 'NIC', required: true },
        {
            name: 'position', label: 'Position', required: true,
            options: ["CEO", "Director", "Production Manager", "HR Manager", "Accounting Manager", "Supervisor", "Helper"]
        },
        { name: 'email', label: 'Email', required: true },
        { name: 'password', label: 'Password', required: true },
        { name: 'phoneNumber', label: 'Phone Number', required: true },
        { name: 'dateOfBirth', label: 'Date of Birth', required: true },
        { name: 'accountNumber', label: 'Account Number', required: true },
        { name: 'holderName', label: 'Holder Name', required: true },
        { name: 'branchName', label: 'Branch Name', required: true },
        { name: 'bankName', label: 'Bank Name', required: true }
    ];

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                field.name === "position" ? (
                    <TextField
                        select
                        key={field.name}
                        required={field.required}
                        error={!!formErrors[field.name]}
                        label={field.label}
                        name={field.name}
                        value={formValues[field.name]}
                        onChange={handleChange}
                        helperText={formErrors[field.name]}
                        margin="dense"
                        style={{ width: "48%", marginLeft: "2%" }}
                    >
                        <MenuItem value="--Select the Position--">
                            --Select the Position--
                        </MenuItem>
                        {field.options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                ) : field.name === "password" ? (
                    <FormControl
                        key={field.name}
                        required={field.required}
                        error={!!formErrors[field.name]}
                        margin="dense"
                        style={{ width: "48%", marginLeft: "2%" }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={formValues.password}
                            name={field.name}
                            onChange={handleChange}
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
                        <FormHelperText>{formErrors[field.name]}</FormHelperText>
                    </FormControl>
                ) : field.name === "dateOfBirth" ? (
                    <TextField
                        type="date"
                        key={field.name}
                        required={field.required}
                        error={!!formErrors[field.name]}
                        label={field.label}
                        name={field.name}
                        value={formValues[field.name]}
                        onChange={handleChange}
                        helperText={formErrors[field.name]}
                        InputLabelProps={{ shrink: true }}
                        margin="dense"
                        style={{ width: "48%", marginLeft: "2%" }}
                    />
                ) : (
                    <TextField
                        disabled={apiMethod === "put" && field.name === "empId" ? true : false}
                        key={field.name}
                        required={field.required}
                        error={!!formErrors[field.name]}
                        label={field.label}
                        name={field.name}
                        value={formValues[field.name]}
                        onChange={handleChange}
                        helperText={formErrors[field.name]}
                        margin="dense"
                        style={{ width: "48%", marginLeft: "2%" }}
                    />
                )
            ))}
            <Box style={{ textAlign: "center", display: "block", marginTop: "20px" }}>
                <Button type="reset" variant='outlined' style={{ margin: "0 20px" }} onClick={handleClear}>
                    {resetBtnName}
                </Button>
                <Button type="submit" variant="contained" style={{ margin: "0 20px" }}>
                    {submitBtnName}
                </Button>
            </Box>
        </form>
    );
}

export default EmployeeForm;
