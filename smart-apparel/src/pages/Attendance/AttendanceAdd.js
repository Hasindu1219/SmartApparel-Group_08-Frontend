import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AttendanceForm from "../../components/AttendanceComponent/AttendanceForm";

function AttendanceAdd(){

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/attendance') }}> <ArrowBackIosNewIcon/> </Button>
                        Add new Attendance Record
                    </Box>
                    <AttendanceForm/>
                </Box>
            </Box>
        </>
    );
}

export default AttendanceAdd;