import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SalaryParamTable({salaryParameters}) {
    const navigate = useNavigate();

    const bgColor = { backgroundColor: '#f7f7f7', textAlign: "center" }

    const handleDelete = (salaryParamId) => {
        if (window.confirm("Are you sure you want to delete this parameter?")) {
            axios.delete(`http://localhost:8080/salary-params/delete/${salaryParamId}`)
                .then((response) => {
                    if (response.status === 202) {
                        alert("Removed successfully.");
                    } else {
                        throw new Error("Failed to remove Employee.");
                    }
                })
                .catch((error) => {
                    console.error("Error removing Employee", error.message);
                });
            window.location.reload();
        }
    }

    const handleEdit = (spId) => {
        navigate(`/salary/update-salary-param/${spId}`);
    }

    return (
        <>
            <Accordion style={{ marginBottom: "50px", backgroundColor: "#f7f7f7",borderRadius:"10px",padding:"5px",boxShadow:"0px 0px 10px gray"}}>
                <AccordionSummary expandIcon={<ExpandMore />} style={{fontWeight:"bold",fontSize:"20px"}}>
                    Salary Parameters
                </AccordionSummary>

                <AccordionDetails>
                    <TableContainer >
                        <Table >
                            <TableHead>
                                <TableRow >
                                    {/* <TableCell sx={{fontWeight:"bold"}}>Salary Parameter ID</TableCell> */}
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Position</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Basic Salary</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>EPF by Employee</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>EPF by Company</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>ETF</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    salaryParameters.length > 0 ? (
                                        salaryParameters.map((salaryParam) => (
                                            <TableRow key={salaryParam.salaryParameterId} >
                                                {/* <TableCell sx={bgColor}>{salaryParam.salaryParameterId}</TableCell> */}
                                                <TableCell sx={bgColor}>{salaryParam.position}</TableCell>
                                                <TableCell sx={bgColor}>Rs. {salaryParam.basicSalary}</TableCell>
                                                <TableCell sx={bgColor}>{salaryParam.epfByEmployee}%</TableCell>
                                                <TableCell sx={bgColor}>{salaryParam.epfByCompany}%</TableCell>
                                                <TableCell sx={bgColor}>{salaryParam.etf}%</TableCell>
                                                <TableCell sx={bgColor}>
                                                    <Button sx={{ marginLeft: "10px", marginRight: "10px",fontWeight:"bold"}} color="primary" size="small" variant="outlined" onClick={() => handleEdit(salaryParam.salaryParameterId)}>Edit</Button>
                                                    <Button sx={{ marginLeft: "10px", marginRight: "10px",fontWeight:"bold"}} color="error" size="small" variant="outlined" onClick={() => handleDelete(salaryParam.salaryParameterId)}>Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan="6" align="center">
                                                No Data
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
                <AccordionActions>
                    <Button variant="contained" style={{fontWeight:"bold"}} onClick={() => { navigate('/salary/add-salary-param') }}>Add New</Button>
                </AccordionActions>

            </Accordion>
        </>
    );
}