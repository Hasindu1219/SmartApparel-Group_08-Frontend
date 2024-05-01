import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, Button, Grid, Typography } from "@mui/material";
import AttendanceUpdate from "../../components/AttendanceComponent/AttendanceUpdate";
import { useNavigate, useParams } from "react-router-dom";

const AttendanceUpdatePage =()=>{
    const { Id } = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    {/* <Grid item sx={{ display: 'inline-flex',marginBottom: '1rem' }}>
                        <Button onClick={() => { navigate('/attendance') }}> Back </Button>
                        <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', textAlign: 'center',marginLeft:'100px' }}>Update Attendance</Typography>
                    </Grid> */}

                    <Box height={30} />
                    <AttendanceUpdate Id={Id}/>
                </Box>
            </Box>

        </div>
    );
}

export default AttendanceUpdatePage;