import React from 'react';
import { Box, TablePagination, Select, MenuItem } from '@mui/material';

const Pagination = ({ page, setPage, rowsPerPage, filteredData }) => {

  const numberOfPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleChangePage = (event) => {
    setPage(event.target.value);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={
            (event, newPage) => {
            setPage(newPage);
            }
          }
          showFirstButton={true}
          showLastButton={true}
        />
        <Select
          size='small'
          value={page}
          onChange={handleChangePage}
        >
          {[...Array(numberOfPages).keys()].map((pageNumber) => (
            <MenuItem key={pageNumber} value={pageNumber}>
              {pageNumber + 1}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default Pagination;