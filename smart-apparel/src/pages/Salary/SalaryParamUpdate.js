import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SalaryParamForm from '../../components/SalaryComponent/SalaryParamForm';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Box, Button } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function SalaryParamUpdate() {
    const { spId } = useParams();
    const navigate = useNavigate();
    const [salaryParamData, setSalaryParamData] = useState({});

    const searchSalaryParamData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/salary-params/search-by-id/${spId}`);
            const fetchedSalaryParam = response.data.content;
            console.log(response);
            setSalaryParamData(fetchedSalaryParam);
        } catch (error) {
            console.error("Error fetching employee data:", error);
            alert("Error: " + error.message);
            console.log("SPID: " + spId);
        }
    }, [spId]);

    useEffect(() => {
        searchSalaryParamData();
    }, [searchSalaryParamData]);

    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/salary') }}><ArrowBackIosNewIcon /></Button>
                        Update Salary Parameter
                    </Box>
                    <SalaryParamForm apiMethod="put" submitBtnName="update" resetBtnName="reset" defaultFieldValues={salaryParamData} />
                </Box>
            </Box>
        </div>
    );
}

export default SalaryParamUpdate;
