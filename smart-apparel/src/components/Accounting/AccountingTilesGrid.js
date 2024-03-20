import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SalesCard from './SalesCard';
import ExpensesCard from './ExpensesCard';
import ReceivablesCard from './Receivables';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ margin: 'auto' }}>
          <SalesCard/>
        </Grid>
        <Grid item xs={3} sx={{ margin: 'auto' }}>
          <ExpensesCard/>
        </Grid>
        <Grid item xs={3} sx={{ margin: 'auto' }}>
          <ReceivablesCard/>
        </Grid>
      </Grid>
    </Box>
  );
}