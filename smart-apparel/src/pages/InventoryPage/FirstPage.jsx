import React from "react";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card1 from "../../components/Card1/Card1";
import backImage from "../../Assets/cloth.png";

export default function FirstPage() {
  return (
    <Container>
      {/* Container for the entire first page */}
      <Box display="flex" justifyContent="center" mt={4}>
        {/* Container for the card component */}
        <Card1 /> {/* Rendering the Card1 component */}
      </Box>
      {/* Main container for the inventory page content */}
      <Box mt={8}>
        <Grid container spacing={4}>
          {/* Container for buttons */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Link to the Add Inventory page */}
              <Button
                variant="contained"
                component={Link}
                to="/inventory/addInventory"
                sx={{ mb: 2, padding: '16px 24px', fontSize: '1.2rem' }} // Increased padding and font size
              >
                <Typography variant="button">Add Material Details</Typography>
              </Button>
              {/* Link to the View Inventory page */}
              <Button
                variant="contained"
                component={Link}
                to="/inventory/viewInventory"
                sx={{ padding: '16px 24px', fontSize: '1.2rem' }} // Increased padding and font size
              >
                <Typography variant="button">View Material Details</Typography>
              </Button>
            </Box>
          </Grid>
          {/* Container for the graph/image */}
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img src={backImage} alt="background" style={{ width: '100%', maxWidth: '500px' }} /> {/* Increased maxWidth */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
