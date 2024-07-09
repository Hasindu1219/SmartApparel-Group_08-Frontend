import { Card, CardContent, Grid, Typography } from "@mui/material"

function EmployeeCard({title,value}) {

    const gradientStyle = {
        background: "linear-gradient(to right, #2980B9, #6DD5FA)", // Gradient colors
    };

    return (
        <Grid item xs="auto">
            <Card sx={{ minWidth: 350 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                    
                    <Typography variant="h5" component="div">
                        {title !== undefined ? title : "Card Title"}
                    </Typography>

                    <Typography variant="h6">
                        {value !== undefined ? value : "_Value_"}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default EmployeeCard