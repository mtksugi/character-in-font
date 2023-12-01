import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { fonts, defaultFontFamily } from '../const/Fonts';

import Board from './Board';
import CharacterTable from './CharacterTable';
import FontSelector from './FontSelector';
import FilterInput from './FilterInput';
import DownloadButton from './DownloadButton';
import Pagination from './Pagination';
import FontDetail from './FontDetail';
import HistoryBoard from './HistoryBoard';

const Home = () => {
  
  const [fontFile, setFontFile] = useState('')
  const [familyName, setFamilyName] = useState(defaultFontFamily)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [filter, setFilter] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (event) => {
    const newFontFile = event.target.value;
    setFontFile(newFontFile);
    
    const newFont = fonts.find((item) => item.file === newFontFile);
    if (newFont) {
      setFamilyName(newFont.familyName + ', ' + defaultFontFamily);
    }
    
    fetchData(newFontFile);
  };
  const fetchData = async (fontFileName) => {
    if (!fontFileName) return

    const url = "/data/" + fontFileName;
    try {
      setIsLoading(true)
      const res = await fetch(url)
      const jsonData = await res.json()
      setData(jsonData.map((item) => {
        item.hex = '0x' + item.code.toString(16).toUpperCase()
        return item
      }))
      setPage(0)

    } catch (error) {
      console.log('Error fetching data: ', url, error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const result = data.filter((item) => filter === '' ||
    (item.character === filter ||
      item.code.toString().startsWith(filter) ||
      item.hex.toLowerCase().startsWith(filter.toLowerCase())));
    setFilteredData(result);
  }, [data, filter]);

  return (
    <>
      <Box my={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <FontSelector fontFile={fontFile} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Board />
          </Grid>
        </Grid>
      </Box>

      { (data.length > 0) &&
        <>
          <Box my={2}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={12} md={10}>
                <FilterInput filter={filter} setFilter={setFilter} setPage={setPage} />
              </Grid>
              <Grid item xs={12} md={2} container justifyContent="flex-end">
                <DownloadButton jsonData={data} fileName={fontFile} />
              </Grid>
            </Grid>
          </Box>
          <Box my={2}>
            <CharacterTable filteredData={filteredData} page={page} rowsPerPage={rowsPerPage} familyName={familyName} />
          </Box>
          
          <Box my={2}>
            <Pagination page={page} setPage={setPage} rowsPerPage={rowsPerPage} filteredData={filteredData} />
          </Box>

          <Box my={2}>
            <FontDetail fontFile={fontFile} />
          </Box>
        </>
      }

      <Box my={2}>
        <HistoryBoard />
      </Box>
    </>
  )
}

export default Home