import React from 'react';
import '../App.css'
import {Card, CardContent, Typography} from '@material-ui/core';
import Product from '../product.json';

const CardGembaProduct = ({title, params}) =>{
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
                    
                    <Typography>
                        <div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px'}}>{title}
                        </div>
                        </Typography>
                   
                    
                    {Product?.map((prod, i)=>(
                        <Typography style={paramStyle} key={prod?.id}>
                            <div className="customText">
                            <div className="row">
                                <div className="col-6">{prod?.name}</div>
                                <div className="col-1">:</div>
                                <div className="col-5" style={{textAlign:"right"}}>{prod?.value}</div>
                                {console.log(i)}
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

export default CardGembaProduct;