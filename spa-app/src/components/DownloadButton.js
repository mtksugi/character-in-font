import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';

const DownloadButton = ({ jsonData, fileName }) => {

  const [isProcessing, setIsProcessing] = useState(false);

  function json2csv(data) {
    const replacer = (key, value) => value === null ? '' : value
    const header = Object.keys(data[0])
    return [
      header.join(','),
      // ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
      ...data.map(row => header.map(fieldName => {
        let str = JSON.stringify(row[fieldName], replacer);
        if (str === '\"\\\"\"') { str = '\"\"\"\"'; }         // handle the double-quote case 
        else if (str === '\"\\\\\"') { str = '\"\\\"'; }   // handle the backslash case
        return str;
      }).join(','))
    ].join('\r\n')
  }

  const handleClick = () => {
    setIsProcessing(true)
    try {
      const bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
      const url = URL.createObjectURL(new Blob([bom, json2csv(jsonData)], {type: 'text/plain'}));
  
      const link = document.createElement('a');
      link.href = url;
      link.innerText = 'Download CSV File';
  
      document.body.appendChild(link);
      link.download = fileName.replace('.json', '.csv')
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.log('Error json to csv: ', error);
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Button
      disabled={isProcessing}
      variant='contained'
      endIcon={<Download />}
      onClick={handleClick}
    >
      CSVファイル
    </Button>
  )
};

export default DownloadButton;