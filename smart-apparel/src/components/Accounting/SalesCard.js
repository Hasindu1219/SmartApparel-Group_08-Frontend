import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';


export default function SalesCard() {
  return (
    <Card sx={{ minWidth: 350, backgroundColor:'yellow' }}>

      <CardContent>
        
        <Typography variant="h4" component="div">
            <TrendingUpTwoToneIcon/> Total Sales
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>

        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

      <CardActions sx={{float:'right'}}>
        <Button size="small">More<ArrowForwardIosIcon/></Button>
        
      </CardActions>

    </Card>
  );
}