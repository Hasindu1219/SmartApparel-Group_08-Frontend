import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SalaryForm from "../../components/SalaryComponent/SalaryForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const SalaryUpdate = () => {
    const { Id } = useParams();
    const navigate = useNavigate();

    const [salary, setSalary] = useState({
        empId: "",
        status: "Pending",
        yearNMonth: "",
        basic: "",
        epfByEmployee: "",
        epfByCompany: "",
        etfPayment: "",
        netSalary: ""
    });

    const fetchSalaryData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/salary/search/${Id}`);
            const fetchedSalary = response.data.content;
            setSalary(fetchedSalary);
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    }, [Id]);

    useEffect(() => {
        fetchSalaryData();
    }, [fetchSalaryData]);

    return (
        <>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/salary') }}><ArrowBackIosNewIcon /></Button>
                        Add New Salary Record
                    </Box>

                    <SalaryForm apiMethod="put" submitBtnName="Update" resetBtnName="Reset" defaultFieldValues={salary}/>
                </Box>
            </Box>
        </>
    );
}

export default SalaryUpdate;