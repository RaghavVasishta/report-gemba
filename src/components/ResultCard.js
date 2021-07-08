import React from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import TableResult from './ResultTable';


const ResultCard = ({title}) => {
    return(
        <Card variant="outlined">
            <CardContent>
                <Typography><div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px', marginBottom:'5px'}}>{title}
                        </div></Typography>
                <Typography>
                    <TableResult/>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ResultCard;