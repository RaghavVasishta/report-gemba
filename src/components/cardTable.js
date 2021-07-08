import React from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import Tables from './Table';

const CardsForTable = ({title}) => {
    const cardStyle={
        display:"block",
        overflowY: 'scroll',
        height: '270px',
    
    }
    return(
        <Card variant="outlined" style={cardStyle}>
            <CardContent>
                <Typography><div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px', marginBottom:'5px'}}>{title}
                        </div></Typography>
                <Typography>
                    <Tables/>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardsForTable;