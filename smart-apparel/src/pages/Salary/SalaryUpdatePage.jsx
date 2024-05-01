import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import SalaryUpdate from "../../components/SalaryComponent/SalaryUpdate";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SalaryUpdatePage =()=>{

    const navigate = useNavigate();
    
    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Grid item sx={{ display: 'inline-flex',marginBottom: '1rem' }}>
                        <Button onClick={() => { navigate('/Salary') }}> Back </Button>
                        <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', textAlign: 'center',marginLeft:'100px' }}>
                            Update Salary Record
                        </Typography>
                    </Grid>

                    <Box height={30} />
                    <SalaryUpdate/>
                </Box>
            </Box>

        </div>
    );
}

export default SalaryUpdatePage;