import React from 'react';
import { TextField } from '@mui/material';

const FilterInput = ({ filter, setFilter, setPage }) => {

  return (
    <TextField
      variant='standard'
      label='文字 or コード でフィルタ'
      value={filter}
      onChange={(event) => {
        setFilter(event.target.value);
        setPage(0); // Reset pagination when filter changes
      }}
      fullWidth
    />
  )
};

export default FilterInput;