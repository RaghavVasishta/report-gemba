import {React} from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import "../App.css";
import ChartDataSample1 from "../CardDataSample.json";
import Chart from 'react-google-charts';
 

const ChartCard = ({title}) => { 
    const cardStyle={
        display: 'block',
        alignContent:'left'
    }   
    const options ={
            hAxis: {
              title: 'Sample Number',
            },
            vAxis: {
              title: 'Diameter',
            },
            legend: 'none'
         
    }
    const x = Object.keys(ChartDataSample1);
    const y = Object.values(ChartDataSample1);
    const chartData = [['Sample Number', 'Diameter']]
    for (let i = 0; i < x.length; i += 1) {
        chartData.push([x[i], y[i]])
    }
    return(
        <Card variant="outlined" style={cardStyle}>
            <CardContent>
                <Typography><div style={{backgroundColor:'rgb(246,247,247)', borderRadius:'5px'}}>{title}
                        </div></Typography>
                        <div className="customCharts"> 
                            <Chart width={'99%'} height={200} chartType="LineChart" data={chartData} options={options}/>  
                        </div>
            </CardContent>
        </Card>
    );
};

export default ChartCard;


