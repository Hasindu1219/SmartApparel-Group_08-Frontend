import { Box, Button, FormControl, FormHelperText, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

function SalaryForm({ apiMethod, submitBtnName, resetBtnName, defaultFieldValues }) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        empId: "",
        status: "Pending",
        yearNMonth: "",
        basic: "",
        epfByEmployee: "",
        epfByCompany: "",
        etfPayment: "",
        netSalary: ""
    });

    const [formErrors, setFormErrors] = useState({
        empId: "",
        status: "",
        yearNMonth: "",
        basic: "",
        epfByEmployee: "",
        epfByCompany: "",
        etfPayment: "",
        netSalary: ""
    });

    useEffect(() => {
        if (defaultFieldValues) {
            setFormValues(defaultFieldValues);
        }
    }, [defaultFieldValues]);

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

    const handleDateChange = (date) => {
        const formattedDate = date ? dayjs(date).format('YYYY-MM') : '';
        setFormValues({
            ...formValues,
            yearNMonth: formattedDate,
        });
        setFormErrors({
            ...formErrors,
            yearNMonth: validateField('yearNMonth', formattedDate),
        });
        console.log("Date picked from date picker:" + date)
        console.log("Formatted date:" + formattedDate + " value of:" + formattedDate.typeof);
        console.log("Date error:" + formErrors.yearNMonth)
    };

    const validateField = (name, value) => {
        let error = "";
        const stringValue = String(value);

        if (!stringValue.trim()) {
            error = 'Field is required';
        } else if (stringValue.trim() !== stringValue) {
            error = 'Begin and end with white spaces are not allowed';
        }else {
            if (name === "empId") {
                if (!/^emp\d+$/.test(stringValue)) {
                    error = 'Enter Correct Employee ID (empXXX)';
                }
            } else if (name === "status") {
                if (stringValue.length > 50) {
                    error = 'Status must be less than or equal to 100 characters';
                }
            } else if (name === "yearNMonth") {
                const selectedDate = dayjs(value, 'YYYY-MM');
                const currentDate = dayjs().startOf('month');
                if (selectedDate.isAfter(currentDate)) {
                    error = 'Future year and month are not allowed';
                }
            } else if (name === "basic" || name === "epfByEmployee" || name === "epfByCompany" || name === "etfPayment" || name === "netSalary") {
                if (!/^\d{1,6}(\.\d{1,2})?$/.test(stringValue)) {
                    error = 'Invalid, must be a valid currency value with up to 6 digits and 2 decimal places';
                }
            }
        }
        return error;
    };

    const handleClear = () => {
        if (apiMethod === "post") {
            setFormValues({
                empId: "",
                status: "Pending",
                yearNMonth: "",
                basic: "",
                epfByEmployee: "",
                epfByCompany: "",
                etfPayment: "",
                netSalary: ""
            });
            setFormErrors({
                empId: "",
                status: "",
                yearNMonth: "",
                basic: "",
                epfByEmployee: "",
                epfByCompany: "",
                etfPayment: "",
                netSalary: ""
            });
        } else {
            setFormErrors({
                empId: "",
                status: "",
                yearNMonth: "",
                basic: "",
                epfByEmployee: "",
                epfByCompany: "",
                etfPayment: "",
                netSalary: ""
            });
            setFormValues(defaultFieldValues);
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
                newErrors[name] = error;
            }
        });

        setFormErrors(newErrors);

        console.log("formValues:", formValues);
        console.log("defaultFieldValues:", defaultFieldValues);

        if (valid && apiMethod === "post") {
            console.log("Object is ready to send to backend, no errors in fields");
            try {
                const response = await axios.post("http://localhost:8080/salary/add", formValues);
                console.log("Response: ", response);
                if (response.status === 202) {
                    alert("New Salary Record added successfully");
                    window.location.reload();
                }
            } catch (error) {
                if (error.response && (error.response.status === 409 || error.response.status === 500)) {
                    alert("Error: " + error.response.data.message);
                    console.log(error);
                } else {
                    console.error("Error submitting form", error);
                    alert("Error submitting form: " + error.message);
                }
            }
        } else if (valid && apiMethod === "put") {
            if (JSON.stringify(defaultFieldValues) === JSON.stringify(formValues)) {
                alert("There is no change to update!");
            } else {
                try {
                    const response = await axios.put("http://localhost:8080/salary/update", formValues);

                    if (response.status === 202) {
                        alert("Salary Record updated successfully.");
                        navigate("/salary");
                    }
                } catch (error) {
                    if (error.response && (error.response.status === 400 || error.response.status === 500)) {
                        alert("Error: " + error.response.data.message);
                    } else {
                        console.error("Error submitting form", error);
                        alert("Error submitting form: " + error.message);
                    }
                }
            }
        }
    };

    const fields = [
        { name: "empId", label: "Employee ID" },
        { name: "status", label: "Payment Status" },
        { name: "yearNMonth", label: "Year and Month" },
        { name: "basic", label: "Basic Salary for Month" },
        { name: "epfByEmployee", label: "EPF Payment by Employee" },
        { name: "epfByCompany", label: "EPF Payment by Company" },
        { name: "etfPayment", label: "ETF Payment" },
        { name: "netSalary", label: "Net Salary" }
    ];

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                field.name === "yearNMonth" ? (
                    <FormControl margin="dense" sx={{ width: "48%", marginLeft: "2%" }} error={!!formErrors[field.name]}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} key={field.name}>
                            <DatePicker
                                disableFuture
                                name={field.name}
                                label="Month & Year"
                                views={['month', 'year']}
                                value={formValues.yearNMonth ? dayjs(formValues.yearNMonth, 'YYYY-MM') : null}
                                onChange={handleDateChange}
                            />
                        </LocalizationProvider>
                        <FormHelperText>{formErrors[field.name]}</FormHelperText>
                    </FormControl>
                ) : (
                    <TextField
                        required
                        key={field.name}
                        error={!!formErrors[field.name]}
                        name={field.name}
                        label={field.label}
                        value={formValues[field.name]}
                        helperText={formErrors[field.name]}
                        onChange={handleChange}
                        margin="dense"
                        style={{ width: "48%", marginLeft: "2%" }}
                    />
                )
            ))}
            <Box style={{ textAlign: "center", display: "block", marginTop: "20px" }}>
                <Button type="reset" variant='outlined' style={{ margin: "0 20px",fontWeight:"bold"}} onClick={handleClear}>
                    {resetBtnName}
                </Button>
                <Button type="submit" variant="contained" color="success" style={{ margin: "0 20px",fontWeight:"bold"}}>
                    {submitBtnName}
                </Button>
            </Box>
        </form>
    );
}

export default SalaryForm;
