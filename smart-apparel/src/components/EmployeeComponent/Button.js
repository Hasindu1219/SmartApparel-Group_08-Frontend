import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2} m={2} sx={{ justifyContent: 'flex-end' }}>
      
        <Link to="/employee/addemployee" className="">
          <Button variant="contained" sx={{ color: 'white', bgcolor: '#007bff' }} >
          Add
          </Button>
        </Link>
      
      
        <Link to="/employee/updateemployee" className="">
          <Button variant="contained" sx={{ color: 'white', bgcolor: '#28a745' }}>
          Update
          </Button>
        </Link>
      
      
        <Link to="/employee/deleteemployee" className="">
          <Button variant="contained" sx={{ color: 'white', bgcolor: '#dc3545' }}>
          Delete
          </Button>
        </Link>
      
    </Stack>
  );
}