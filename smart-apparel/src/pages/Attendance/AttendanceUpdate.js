import AttendanceForm from "../../components/AttendanceComponent/AttendanceForm";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect, useState } from "react";
import axios from "axios";

const AttendanceUpdate = () => {
    const { Id } = useParams();
    const navigate = useNavigate();

    const [attendanceRecord, setAttendanceRecord] = useState({
        attendanceId: '',
        date: '',
        inTime: null,
        outTime: null,
        empId: '',
    });

    useEffect(() => {
        const fetchAttendanceRecordData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/attendance/searchbyid/${Id}`);
                const fetchedAttendanceRecordData = response.data.content;

                setAttendanceRecord(fetchedAttendanceRecordData);

            } catch (error) {
                console.error("Error fetching attendance data:", error);
            }
        };

        fetchAttendanceRecordData();
    }, [Id]);

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/attendance') }}> <ArrowBackIosNewIcon /> </Button>
                        Update Attendance Record
                    </Box>
                    <AttendanceForm defaultFieldValues={attendanceRecord} submitBtnName="update" resetBtnName="reset" apiMethod="put" />
                </Box>
            </Box>
        </>
    );
}

export default AttendanceUpdate;