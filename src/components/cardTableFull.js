import React from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import TableData from '../TableData.json'
import {JsonToTable} from 'react-json-to-table'

const CardTableFull = ({title}) => {
    return(
        <Card variant="standard">
            <CardContent>
                <Typography><div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px', marginBottom:'5px'}}>{title}
                        </div></Typography>
                <Typography>
                <JsonToTable json={TableData}/>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardTableFull;