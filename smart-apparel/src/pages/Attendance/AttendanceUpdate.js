import AttendanceForm from "../../components/AttendanceComponent/AttendanceForm";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const AttendanceUpdate =()=>{
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
                </Box>
            </Box>

        </div>
    );
}

export default AttendanceUpdate;