import React from 'react';
import {Table, TableBody, TableContainer} from '@material-ui/core';
import TableResult from '../TableResult.json';
import {JsonToTable} from 'react-json-to-table'


const TableResults = () => {
    return(
    <TableContainer>
      <Table aria-label="simple table">
        {(
        <TableBody><JsonToTable json={TableResult}/></TableBody>
        )}
      </Table>
    </TableContainer>
    );
}

export default TableResults;