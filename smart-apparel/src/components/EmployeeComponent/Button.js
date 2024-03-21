import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2} m={2} sx={{ justifyContent: 'flex-end' }}>
      <Button variant="contained" sx={{ color: 'white', bgcolor: '#007bff' }}>Add</Button>
      <Button variant="contained" sx={{ color: 'white', bgcolor: '#28a745' }}>Update</Button>
      <Button variant="contained" sx={{ color: 'white', bgcolor: '#dc3545' }}>Delete</Button>
    </Stack>
  );
}