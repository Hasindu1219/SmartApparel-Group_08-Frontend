import React from 'react';
import { Grid, CardContent, Typography, CircularProgress } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { CenterFocusStrong, CenterFocusStrongRounded } from '@mui/icons-material';

const CardModel = ({ totalvalue,cardname,style, loading }) => {
  
  return (
    <Grid item xs="auto">
      <MuiCard sx={{ minWidth: 350, minHeight:140}} style={style}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5" component="div">
            {cardname}
          </Typography>
          {/* Conditional rendering based on loading state */}
          {loading ? (
            <CircularProgress /> // Display loading indicator while loading is true
          ) : (
            <Typography variant="h5">{`${totalvalue / 1000000} Mn`}</Typography>
          )}
        </CardContent>
      </MuiCard>
    </Grid>
  );
};

export default CardModel;
