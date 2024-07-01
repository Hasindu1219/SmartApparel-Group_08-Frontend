import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

    const validateField = (name, value) => {
        let error = "";
        const stringValue = String(value);

        if (name === "empId") {
            if (!stringValue.trim()) {
                error = 'Employee ID is required';
            }
        } else if (name === "status") {
            if (!stringValue.trim()) {
                error = 'Status is required';
            }
        } else if (name === "yearNMonth") {
            if (!stringValue.trim()) {
                error = 'Year and month are required';
            }
        } else if (name === "basic" || name === "epfByEmployee" || name === "epfByCompany" || name === "etfPayment" || name === "netSalary") {
            if (!stringValue.trim()) {
                error = 'Field is required';
            } else if (!/^\d+(\.\d{1,2})?$/.test(stringValue)) {
                error = 'Invalid, must be a valid currency value with up to two decimal places';
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

export default SalaryForm;
