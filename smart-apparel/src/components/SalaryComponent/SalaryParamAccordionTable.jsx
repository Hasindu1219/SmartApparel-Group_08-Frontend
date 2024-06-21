import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Dialog, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SalaryParamAccordionTable() {
    const navigate = useNavigate();
    const [salaryParamList, setSalaryParamList] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/salary-params/view')
            .then((response) => {
                const { data } = response;
                if (data && data.content) {
                    setSalaryParamList(data.content);
                } else {
                    console.error('Invalid response format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching Salary Parameters:', error);
            });
    }, []);

    const handleClickOpen= () => {}

    return (
        <>
            <Accordion sx={{ marginBottom: "10px" }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    Salary Parameters
                </AccordionSummary>

                <AccordionDetails>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Salary Parameter ID</TableCell>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Basic Salary</TableCell>
                                    <TableCell>EPF by Employee</TableCell>
                                    <TableCell>EPF by Company</TableCell>
                                    <TableCell>ETF</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    salaryParamList.length > 0 ? (
                                        salaryParamList.map((salaryParam) => (
                                            <TableRow key={salaryParam.salaryParameterId}>
                                                <TableCell>{salaryParam.salaryParameterId}</TableCell>
                                                <TableCell>{salaryParam.position}</TableCell>
                                                <TableCell>{salaryParam.basicSalary}</TableCell>
                                                <TableCell>{salaryParam.epfByEmployee}</TableCell>
                                                <TableCell>{salaryParam.epfByCompany}</TableCell>
                                                <TableCell>{salaryParam.etf}</TableCell>
                                                <TableCell>
                                                    <Button variant="outlined">Edit</Button>
                                                    <Button variant="outlined" onClick={handleClickOpen}>Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan="7" align="center">
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
                    <Button variant="outlined" onClick={() => { navigate('/salary-param/addsalaryparam') }}>Add New</Button>
                </AccordionActions>

            </Accordion>

            <Dialog>

            </Dialog>
        </>
    );
}