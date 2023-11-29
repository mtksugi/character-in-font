import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { fonts } from '../const/Fonts';

const FontSelector = ({ fontFile, handleChange }) => {

  return (
    <>
    <FormControl variant='standard' sx={{ m:1, minWidth: 300 }}>
      <InputLabel>フォントを選択してください</InputLabel>
      <Select
        label="フォント"
        value={fontFile}
        onChange={handleChange}
      >
        {fonts.map((item) => (
          <MenuItem key={item.name} value={item.file}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </>
  )
};

export default FontSelector;
