import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SalaryParamForm({ apiMethod, submitBtnName, resetBtnName, defaultFieldValues }) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        position: "",
        basicSalary: "",
        epfByEmployee: "",
        epfByCompany: "",
        etf: ""
    });

    const [formErrors, setFormErrors] = useState({
        position: "",
        basicSalary: "",
        epfByEmployee: "",
        epfByCompany: "",
        etf: ""
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

        if (!stringValue.trim()) {
            error = 'Field is required';
        } else if (stringValue.trim() !== value) {
            error = 'Begin and end with white spaces are not allowed';
        }else {
            if (name === "position") {
                if (!/^[a-zA-Z\s]+$/.test(stringValue)) {
                    error = 'Position can contain only letters and spaces';
                }
            } else if (name === "basicSalary") {
                if (!/^\d{1,6}(\.\d{1,2})?$/.test(stringValue)) {
                    error = 'Invalid, must be a valid currency value with up to 6 digits and 2 decimal places';
                }
            } else if (name === "epfByEmployee" || name === "epfByCompany" || name === "etf") {
                if (!/^(\d{1,2}(\.\d{1,2})?|100(\.00?)?)$/.test(stringValue)) {
                    error = 'Invalid, only numbers between 0.00 and 100.00 are allowed';
                }
            }
        }

        return error;
    };

    const handleClear = () => {
        if (apiMethod === "post") {
            setFormValues({
                position: "",
                basicSalary: "",
                epfByEmployee: "",
                epfByCompany: "",
                etf: ""
            });
            setFormErrors({
                position: "",
                basicSalary: "",
                epfByEmployee: "",
                epfByCompany: "",
                etf: ""
            });
        } else {
            setFormErrors({
                position: "",
                basicSalary: "",
                epfByEmployee: "",
                epfByCompany: "",
                etf: ""
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
            console.log("Object is ready to send backend, no errors in fields");
            try {
                const response = await axios.post("http://localhost:8080/salary-params/add", formValues);
                console.log("Response: ", response);
                if (response.status === 202) {
                    alert("Salary Parameter added successfully");
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
                    const response = await axios.put("http://localhost:8080/salary-params/update", formValues);

                    if (response.status === 202) {
                        alert("Salary parameter updated successfully.");
                        navigate("/salary");
                    }
                } catch (error) {
                    if (error.response && (error.response.status === 400 || error.response.status === 500)) {
                        alert("Error: " + error.response.data.message);
                        // console.log(error);
                    } else {
                        console.error("Error submitting form", error);
                        alert("Error submitting form: " + error.message);
                    }
                }
            }
        }
    };

    const fields = [
        { name: "position", label: "Position" },
        { name: "basicSalary", label: "Basic Salary (Rs.)" },
        { name: "epfByEmployee", label: "EPF Percentage By Employee" },
        { name: "epfByCompany", label: "EPF Percentage By Company" },
        { name: "etf", label: "ETF Percentage" }
    ];

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <TextField
                    required={true}
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

export default SalaryParamForm;
