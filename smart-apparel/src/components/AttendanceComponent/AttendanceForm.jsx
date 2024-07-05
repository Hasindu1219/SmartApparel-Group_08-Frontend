import { Box, Button, FormControl, FormHelperText, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

function AttendanceForm({ apiMethod, submitBtnName, resetBtnName, defaultFieldValues }) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        empId: "",
        date: "",
        inTime: null,
        outTime: null
    });

    const [formErrors, setFormErrors] = useState({
        empId: "",
        date: "",
        inTime: "",
        outTime: ""
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
        const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : '';
        setFormValues({
            ...formValues,
            date: formattedDate,
        });
        setFormErrors({
            ...formErrors,
            date: validateField('date', formattedDate),
        });
    };

    const handleTimeChange = (name, time) => {
        console.log("Unformatted time:", time);
        const formattedTime = time ? dayjs(time).format('HH:mm:ss') : null;
        console.log("Formatted time:", formattedTime);

        setFormValues({
            ...formValues,
            [name]: formattedTime,
        });
        setFormErrors({
            ...formErrors,
            [name]: validateField(name, formattedTime),
        });
    };

    const validateField = (name, value) => {
        let error = "";

        // Required field validation
        if (name === "inTime" && !value) { // Check for null, undefined, or empty value
            console.log("inTime error is set");
            error = 'Field is required';
        } else if (!value && name !== "outTime") {
            error = 'Field is required';
        } else {
            const stringValue = String(value).trim();
            if (stringValue !== String(value)) {
                error = 'Begin and end with white spaces are not allowed';
            } else {
                // Field-specific validations
                if (name === "empId") {
                    if (!/^emp\d+$/.test(stringValue)) {
                        error = 'Enter Correct Employee ID (empXXX)';
                    }
                } else if (name === "date") {
                    const selectedDate = dayjs(value, 'YYYY-MM-DD');
                    const currentDate = dayjs().startOf('day');
                    if (selectedDate.isAfter(currentDate)) {
                        error = 'Future date is not allowed';
                    }
                } else if (name === "inTime") {
                    if (formValues.outTime && stringValue >= formValues.outTime) {
                        error = 'In Time should be earlier than Out Time';
                    }
                } else if (name === "outTime" && stringValue) {
                    if (formValues.inTime && stringValue <= formValues.inTime) {
                        error = 'Out Time should be later than In Time';
                    }
                }
            }
        }
        return error;
    };

    const handleClear = () => {
        if (apiMethod === "post") {
            setFormValues({
                date: "",
                inTime: "",
                outTime: "",
                empId: ""
            });
            setFormErrors({
                date: "",
                inTime: "",
                outTime: "",
                empId: ""
            });
        } else {
            setFormErrors({
                date: "",
                inTime: "",
                outTime: "",
                empId: ""
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

        console.log("FormValues:", formValues)
        console.log("FormErrors:", formErrors)

        if (valid && apiMethod === "post") {
            try {
                const response = await axios.post("http://localhost:8080/attendance/add", formValues);
                if (response.status === 202) {
                    alert("New Attendance Record added successfully");
                    window.location.reload();
                }
            } catch (error) {
                handleAPIError(error);
            }
        } else if (valid && apiMethod === "put") {
            if (JSON.stringify(defaultFieldValues) === JSON.stringify(formValues)) {
                alert("There is no change to update!");
            } else {
                try {
                    const response = await axios.put("http://localhost:8080/attendance/update", formValues);
                    if (response.status === 202) {
                        alert("Attendance Record updated successfully.");
                        navigate("/attendance");
                    }
                } catch (error) {
                    handleAPIError(error);
                }
            }
        }
    };

    const handleAPIError = (error) => {
        if (error.response && (error.response.status === 400 || error.response.status === 500)) {
            alert("Error: " + error.response.data.message);
        } else {
            console.error("Error submitting form", error);
            alert("Error submitting form: " + error.message);
        }
    };

    const fields = [
        { name: "empId", label: "Employee ID" },
        { name: "date", label: "Date" },
        { name: "inTime", label: "In Time" },
        { name: "outTime", label: "Out Time" }
    ];

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                field.name === "date" ? (
                    <FormControl error={!!formErrors[field.name]} key={field.name} margin="dense" sx={{ width: "48%", marginLeft: "2%" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                name={field.name}
                                label={field.label}
                                value={formValues.date ? dayjs(formValues.date, 'YYYY-MM-DD') : null}
                                onChange={handleDateChange}
                                slotProps={{ textField: { required: true } }}
                            />
                        </LocalizationProvider>
                        <FormHelperText>{formErrors[field.name]}</FormHelperText>
                    </FormControl>
                ) : field.name === "inTime" || field.name === "outTime" ? (
                    <LocalizationProvider dateAdapter={AdapterDayjs} key={field.name}>
                        <TimePicker ampm={false} views={['hours', 'minutes', 'seconds']}
                            label={field.label}
                            value={formValues[field.name] ? dayjs(formValues[field.name], 'HH:mm:ss') : null}
                            onChange={(time) => handleTimeChange(field.name, time)}
                            slotProps={{
                                textField: {
                                    helperText: formErrors[field.name],
                                    required: field.name === "inTime",
                                    error: !!formErrors[field.name],
                                    margin: "dense",
                                    style: { width: "48%", marginLeft: "2%" }
                                }
                            }}
                        />
                    </LocalizationProvider>
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
                <Button onClick={handleClear} type="reset" variant='outlined' style={{ margin: "0 20px", fontWeight: "bold" }}>
                    {resetBtnName}
                </Button>
                <Button type="submit" variant="contained" color="success" style={{ margin: "0 20px", fontWeight: "bold" }}>
                    {submitBtnName}
                </Button>
            </Box>
        </form>
    );
}

export default AttendanceForm;
