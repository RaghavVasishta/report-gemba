import {React} from 'react';
import './App.css';
import CardGembaProduct from './components/cardGemba';
import {Grid, useMediaQuery} from '@material-ui/core';
import CardsForTable from './components/cardTable';
import CharacteristicCard from './components/CharacteristicCard';
import ChartCard from './components/ChartCard';
import DrawingCard from './components/DrawingCard';
import ProcessCard from './components/ProcessCard';
import EvaluationCard from './components/EvaluationCard';
import ResultCard from './components/ResultCard'; 
import ArrayNumber from './components/ArrayNumber'


const App=()=> {
  const matchesPrint = useMediaQuery("print");
  return (
    <div className="App">
      <div className="row">
      <div className="col-4"><img style={{height:'50px', marginBottom:'5px'}} src="" alt="Company 1 Logo"/></div>
      <div className="col-4"><header>
          <h3>Gauge Baises Analysis</h3>
      </header></div>
      <div className="col-4"><img style={{height:'50px', marginBottom:'5px'}} src="" alt="Company 2 Logo"/></div>
      </div>
        <Grid container spacing={0.5}>
          {matchesPrint &&
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <CardGembaProduct title={"Product and Gauge Information"} />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
               <CharacteristicCard title={"Characteristic Information"}/>
              </Grid>
            </Grid>
          }  
          {!matchesPrint &&
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardGembaProduct title={"Product and Gauge Information"} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
               <CharacteristicCard title={"Characteristic Information"}/>
              </Grid>
            </Grid>
          }  
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardsForTable title={"Data Table"}/>
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ChartCard title={"Run Charts"}/>
          </Grid>
          {matchesPrint &&
            <Grid container>
              <Grid  item xs={4} sm={4} md={4} lg={4}>
                <DrawingCard title={"Drawing Requirements"}/>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <ProcessCard title={"Process Outcome"}/>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <EvaluationCard title={"Evalulation"}/>
              </Grid>
            </Grid>
          }
          {!matchesPrint &&
            <Grid container>
              <Grid  item xs={12} sm={12} md={4} lg={4}>
                <DrawingCard title={"Drawing Requirements"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <ProcessCard title={"Process Outcome"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <EvaluationCard title={"Evalulation"}/>
              </Grid>
            </Grid>
          }
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ResultCard title={"Result"}/>
              </Grid>
            </Grid>
     <footer>
       <div className="row">
         <div className="col-4" style={{marginTop:'20px', alignItems:'left'}}>Prepared By:</div>
         <div className="col-8" style={{marginTop:'20px', alignContent:'right'}}>Approved By:</div>
       </div>
       <div style={{marginTop:'20px', fontSize:'0.5em'}}>{Date()}</div>
     </footer>
     {matchesPrint &&
          <ArrayNumber/>
     }    
    </div>
  );
}

export default App;
