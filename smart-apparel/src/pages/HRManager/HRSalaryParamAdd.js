import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/HRManager/HRSidebar";
import { Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SalaryParamForm from "../../components/SalaryComponent/SalaryParamForm";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const HRSalaryAddPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/HR/Salary') }}><ArrowBackIosNewIcon /></Button>
                        Add New Salary Parameter
                    </Box>
                    <SalaryParamForm apiMethod="post" submitBtnName="Add" resetBtnName="Clear" />

                </Box>
            </Box>

        </div>
    );
}

export default HRSalaryAddPage;