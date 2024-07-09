import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SalaryForm from "../../components/SalaryComponent/SalaryForm";

function SalaryAdd(){

    const navigate = useNavigate();

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

                    <SalaryForm apiMethod="post" submitBtnName="Add" resetBtnName="Clear" />
                </Box>
            </Box>
        </>
    );
}

export default SalaryAdd;