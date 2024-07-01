import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import SalaryTable from "../../components/SalaryComponent/SalaryTable";
import SalaryParamTable from "../../components/SalaryComponent/SalaryParamTable";
import axios from "axios";

function SalaryHome() {
    const [salaryParamList, setSalaryParamList] = useState([]);
    const [salaryList, setSalaryList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/salary-params/view')
            .then((response) => {
                const { data } = response;
                if (data && data.content) {
                    setSalaryParamList(data.content);
                    // console.log("Response:",response);
                } else {
                    console.error('Invalid response format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching Salary Parameters:', error);
            });

            axios.get('http://localhost:8080/salary/view')
            .then((response) => {
                const { data } = response;
                if (data && data.content) {
                    setSalaryList(data.content); // Set the state with the fetched data
                } else {
                    console.error('Invalid response format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching Salaries:', error);
            });
    }, []);

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Salary</h1>
                    <SalaryParamTable salaryParameters={salaryParamList}/>
                    <SalaryTable salaryList={salaryList}/>
                </Box>
            </Box>
        </>
    );
}
export default SalaryHome;