import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2} m={2} sx={{ justifyContent: 'flex-end' }}>
      <Button color="info">Add</Button>
      <Button variant="contained" color="success">
        Update
      </Button>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </Stack>
  );
}