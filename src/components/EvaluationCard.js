import React from 'react';
import '../App.css'
import {Card,CardContent, Typography} from '@material-ui/core';
import EvaluationData from '../EvaluationData.json';

const EvaluationCard = ({title}) =>{
    const cardStyle = {
        color: 'black',
        minHeight:'160px'
    }
    const paramStyle ={
        textAlign: 'left',
        flexWrap:'wrap',
        lineHeight:'25px'
    }
        
    return(
        <div>
            {(
            <Card variant="outlined" style={cardStyle}>
                <CardContent>
                    <Typography><div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px'}}>{title}
                        </div></Typography>
                    {EvaluationData?.map((prod)=>(
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

export default EvaluationCard;