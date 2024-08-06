import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/HRManager/Navbar/Navbar";
import Sidebar from "../../components/HRManager/HRSidebar";
import axios from "axios";
import SalaryTable from "../../components/HRManager/SalaryTable";
import SalaryParamTable from "../../components/HRManager/SalaryParamTable";

export default function HRSalaryHome() {
    const [salaryParamList, setSalaryParamList] = useState([]);
    const [salaryList, setSalaryList] = useState([]);
    // const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const salaryParamsResponse = await axios.get('http://localhost:8080/salary-params/view');
                const salaryResponse = await axios.get('http://localhost:8080/salary/view');

                if (salaryParamsResponse.data && salaryParamsResponse.data.content) {
                    setSalaryParamList(salaryParamsResponse.data.content);
                } else {
                    console.error('Invalid salary parameters response format:', salaryParamsResponse.data);
                }

                if (salaryResponse.data && salaryResponse.data.content) {
                    setSalaryList(salaryResponse.data.content);
                } else {
                    console.error('Invalid salary response format:', salaryResponse.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            // } finally {
            //     setLoading(false); // Set loading to false after data is fetched
            // }
        };

        fetchData();
    }, []);

    // if (loading) {
    //     return <div>Loading...</div>; // Display a loading message or spinner
    // }

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Salary</h1>
                    <SalaryParamTable salaryParameters={salaryParamList} />
                    <SalaryTable salaryList={salaryList} />
                </Box>
            </Box>
        </>
    );
}