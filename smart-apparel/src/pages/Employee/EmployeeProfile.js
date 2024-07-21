import { Box, Button } from "@mui/material"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from "react-router-dom"
import EmpProfileForm from "../../components/EmployeeComponent/EmpProfileForm"

function EmployeeProfile() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
                        <Button onClick={() => { navigate('/overview') }}><ArrowBackIosNewIcon /></Button>
                        My Profile
                    </Box>

                    {/* <EmployeeForm submitBtnName="Update" resetBtnName="Clear" apiMethod="put"
                        defaultFieldValues={JSON.parse(localStorage.getItem('user'))} /> */}
                    <EmpProfileForm submitBtnName="Update" resetBtnName="Clear" apiMethod="put"
                        defaultFieldValues={JSON.parse(localStorage.getItem('user'))} />
                </Box>
            </Box>
        </>
    )
}

export default EmployeeProfile