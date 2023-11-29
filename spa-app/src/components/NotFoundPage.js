import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const NotFoundPage = () => (
  <Box mt={5}>
    <Typography gutterBottom>
      ページがありません。<br/>
      <Link href='/'>
        Homeへ
      </Link>
    </Typography>
  </Box>
)

export default NotFoundPage