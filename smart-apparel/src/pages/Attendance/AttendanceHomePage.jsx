import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import AttendanceTable from '../../components/AttendanceComponent/AttendanceTable';
import { Box } from "@mui/material";

const AttendanceHomePage =()=>{
    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Attendance</h1>
                    <Box height={30} />
                    <AttendanceTable/>
                </Box>
            </Box>

        </div>
    );
}

export default AttendanceHomePage;