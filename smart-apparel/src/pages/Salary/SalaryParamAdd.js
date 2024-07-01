import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SalaryParamForm from "../../components/SalaryComponent/SalaryParamForm";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const SalaryAddPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <Box height={60} />

            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/salary') }}><ArrowBackIosNewIcon /></Button>
                        Add New Salary Parameter
                    </Box>
                    <SalaryParamForm apiMethod="post" submitBtnName="Add" resetBtnName="Clear" />

                </Box>
            </Box>

        </div>
    );
}

export default SalaryAddPage;