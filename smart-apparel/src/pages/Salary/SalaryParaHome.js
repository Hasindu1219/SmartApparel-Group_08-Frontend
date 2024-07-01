import React from 'react'
import SalaryParamTable from '../../components/SalaryComponent/SalaryParamTable'
import Navbar from '../../components/Navbar/Navbar'
import { Box, Button } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom'

function SalaryParaHome() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box height={60} />

      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
            <Button onClick={() => { navigate('/salary') }}><ArrowBackIosNewIcon /></Button>
            Salary Parameter
          </Box>

          <SalaryParamTable />
        </Box>
      </Box>
    </>
  )
}

export default SalaryParaHome