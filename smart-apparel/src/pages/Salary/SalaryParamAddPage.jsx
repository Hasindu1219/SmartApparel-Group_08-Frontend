import Navbar from "../../components/Navbar/Navbar";
import SalaryParameterAdd from "../../components/SalaryComponent/SalaryParameterAdd";
import Sidebar from "../../components/Sidebar";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SalaryAddPage =()=>{

    const navigate = useNavigate();
    
    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Grid item sx={{ display: 'inline-flex',marginBottom: '1rem' }}>
                        <Button onClick={() => { navigate('/salary') }}> Back </Button>
                        <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', textAlign: 'center',marginLeft:'100px' }}>
                            Add New Salary Parameter
                        </Typography>
                    </Grid>

                    <Box height={30} />
                    <SalaryParameterAdd/>
                </Box>
            </Box>

        </div>
    );
}

export default SalaryAddPage;