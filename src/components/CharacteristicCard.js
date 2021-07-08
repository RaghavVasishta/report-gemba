import React from 'react';
import '../App.css'
import {Card, CardContent, Typography} from '@material-ui/core';
import Characteristics from '../Characteristics.json';

const CharacteristicCard = ({title}) =>{
    const cardStyle = {
        color: 'black',
        minHeight:'250px'
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
                    {Characteristics?.map((prod)=>(
                        <Typography style={paramStyle} key={prod?.id}>
                        <div className="customText">
                            <div className="row">
                                <div className="col-6">{prod?.name}</div>
                                <div className="col-1">:</div>
                                <div className="col-5" style={{textAlign:"right"}}>{prod?.value}</div>
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

export default CharacteristicCard;