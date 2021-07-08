import {React} from 'react';
import {Grid} from '@material-ui/core';
import TableData from "../TableData.json";
import CardTableFull from './cardTableFull';
import CardGembaProduct from './cardGemba';
import CharacteristicCard from './CharacteristicCard';


const ArrayNumber = ()=>{
    
  const countVar = Object.values(TableData).length;

  if(countVar >= 12){
      return(
          <div>  
              <div className="row">
                <div className="col-4"><img style={{height:'50px', marginBottom:'5px'}} src="" alt="Company 1 Logo"/></div>
                <div className="col-4"><header>
                    <h3>Gauge Baises Analysis</h3>
                </header></div>
                <div className="col-4"><img style={{height:'50px', marginBottom:'5px'}} src="" alt="Company 2 Logo"/></div>
                </div>
              <Grid container spacing={1}>
                  <Grid item lg={6} md={6} sm={12} xs={6}>
                      <CardGembaProduct title={"Product and guage info"}/>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={6}>
                      <CharacteristicCard title={"Characteristic info"}/>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                      <CardTableFull title={"Data table"}/>
                  </Grid>
              </Grid>
          </div>
      );
  }
  else if(countVar>0 && countVar<12){
      return(
          <html/>
      );
  }
}

export default ArrayNumber;