import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import BasicGrid from "../../components/Accounting/AccountingTilesGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Accounting() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Accounting</h1>
          <BasicGrid />

          <Box height={30} />

          <Stack spacing={2}>
            <Item sx={{  maxWidth: 350, minHeight:80}}>Item 1</Item>
            <Item sx={{  maxWidth: 350, minHeight:80}}>Item 2</Item>
            <Item sx={{  maxWidth: 350, minHeight:80}}>Item 3</Item>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
