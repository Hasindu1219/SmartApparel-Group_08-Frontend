import Navbar from "../../components/HRManager/Navbar/Navbar";
import Sidebar from "../../components/HRManager/HRSidebar";
import { Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AttendanceForm from "../../components/AttendanceComponent/AttendanceForm";

function HRAttendanceAdd(){

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/HR/Attendance') }}> <ArrowBackIosNewIcon/> </Button>
                        Add new Attendance Record
                    </Box>
                    <AttendanceForm submitBtnName="add" resetBtnName="clear" apiMethod="post"/>
                </Box>
            </Box>
        </>
    );
}

export default HRAttendanceAdd;