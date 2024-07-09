import React from "react";
// Importing Material-UI components
import { Box, Typography, Grid, Paper } from "@mui/material";
// Importing the icon image
import tshirtIcon from "../../Assets/tshirt.png";

export default function Card1() {
  // Component to create a single card
  const CardItem = ({ icon, title, count }) => (
    // Paper component for a card with padding, margin, elevation, and background color
    <Paper
      elevation={3}
      sx={{ padding: 2, margin: 2, backgroundColor: "#e3f2fd", height: "100%" }}
    >
      {/* Box component to create a flex container for the icon and title */}
      <Box display="flex" alignItems="center">
        {/* Image for the icon */}
        <img
          src={icon}
          alt="Icon"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        {/* Typography for the title */}
        <Typography variant="h6">{title}</Typography>
      </Box>
      {/* Typography for the count */}
      <Typography variant="body1" mt={2}>
        {count}
      </Typography>
    </Paper>
  );

  return (
    // Main container for the cards
    <Box>
      {/* Grid container to create a responsive layout for the cards */}
      <Grid container spacing={2}>
        {/* Grid item for the first card */}
        <Grid item xs={12} md={4}>
          {/* Card component with icon, title, and count */}
          <CardItem
            icon={tshirtIcon}
            title="Available Cloth Material Types"
            // count="Cloth Material: 20"
          />
        </Grid>
        {/* Grid item for the second card */}
        <Grid item xs={12} md={4}>
          <CardItem
            icon={tshirtIcon}
            title="Available Button & Zip Types"
            count={
              <>
                {/* <Typography variant="body1">Button: 50</Typography>
                <Typography variant="body1">Zip: 25</Typography> */}
              </>
            }
          />
        </Grid>
        {/* Grid item for the third card */}
        <Grid item xs={12} md={4}>
          <CardItem
            icon={tshirtIcon}
            title="Other Stock Categories"
            // count="Material Categories: 60"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
