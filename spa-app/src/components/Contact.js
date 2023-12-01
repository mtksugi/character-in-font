import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Contact = () => {
  
  const contactForm = process.env.REACT_APP_CONTACT_FORM;
  
  return (
    <Box mt={5}>
      <Typography gutterBottom>
        お問い合わせは
        <Link href={contactForm} target="_blank" rel="noreferrer">
          こちら
        </Link>
        にお願いします。
      </Typography>
      <Typography gutterBottom>
        追加フォントのご要望もご連絡ください。
      </Typography>
    </Box>
  )
}

export default Contact