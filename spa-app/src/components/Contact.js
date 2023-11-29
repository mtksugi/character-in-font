import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Contact = () => (
  <Box mt={5}>
    <Typography gutterBottom>
      お問い合わせは
      <Link href='https://form.jotform.com/233287891056465' target="_blank" rel="noreferrer">
        こちら
      </Link>
      にお願いします。
    </Typography>
    <Typography gutterBottom>
      追加フォントのご要望もご連絡ください。
    </Typography>
  </Box>
)

export default Contact