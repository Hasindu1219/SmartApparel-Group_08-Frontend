import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/HRManager/HRSidebar";
import { Box } from "@mui/material";
import AttendanceTable from "../../components/HRManager/AttendanceTable";

export default function HRAttendanceHome(){
    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Attendance</h1>
                    
                    <AttendanceTable/>
                </Box>
            </Box>

        </>
    );
}