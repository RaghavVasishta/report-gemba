import React from 'react';
import {Table, TableBody, TableContainer} from '@material-ui/core';
import TableData from '../TableData.json';
import {JsonToTable} from 'react-json-to-table';


const Tables = () => {
    
    
    return(
    <TableContainer >
      
      <Table  aria-label="simple table">
        {(
         
        <TableBody ><JsonToTable json={TableData}/></TableBody>
      
        )}
      </Table>
    </TableContainer>
    );
}

export default Tables;