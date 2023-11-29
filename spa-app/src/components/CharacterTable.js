import React, { useEffect, useRef } from 'react';
import { TableCell, TableContainer, TableHead, TableRow, Paper, TableBody, Table } from '@mui/material';

const headerStyle = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
}

const CharacterTable = ({ filteredData, page, rowsPerPage, familyName }) => {

  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.scrollTop = 0;
  }, [page]);

  return (
    <TableContainer ref={tableRef} component={Paper} sx={{ maxHeight: 500 }}>
      <Table stickyHeader size='small'>
        <TableHead>
          <TableRow>
            <TableCell sx={{...headerStyle}}>文字</TableCell>
            <TableCell sx={{...headerStyle}}>コード（Dec）</TableCell>
            <TableCell sx={{...headerStyle}}>コード（Hex）</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <TableRow key={item.code}>
                <TableCell sx={{fontFamily: familyName, fontSize: '1.2rem' }}>{item.character}</TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.hex}</TableCell>
              </TableRow>
            ))
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterTable;