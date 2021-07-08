import React from 'react';
import '../App.css'
import {Card, CardContent, Typography} from '@material-ui/core';
import ProcessOutcome from '../ProcessOutcome.json';

const ProcessCard = ({title}) =>{
    const cardStyle = {
        color: 'black',
        minHeight:'160px'
    }
    const paramStyle ={
        textAlign: 'left',
        flexWrap:'wrap',
        lineHeight:'22px'
    }  
    return(
        <div>
            {(
            <Card variant="outlined" style={cardStyle}>
                <CardContent>
                    <Typography><div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px'}}>{title}
                        </div></Typography>
                    {ProcessOutcome?.map((prod)=>(
                        <Typography style={paramStyle} key={prod?.id}>
                        <div className="customText">
                            <div className="row">
                                <div className="col-8">{prod?.name}</div>
                                <div className="col-1">:</div>
                                <div className="col-2" style={{textAlign:"right"}}>{prod?.value}</div>
                            </div>
                            </div>
                    </Typography>
                    ))}
                </CardContent>
            </Card>
            )}
        </div>
    );
}

export default ProcessCard;