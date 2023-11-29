import React, {Fragment} from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const textList = [
  {
    no: 1, date: '2023-11-25', content: '初版リリース', 
  },
]

const HistoryBoard = () => {

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='h2' gutterBottom>
          更新履歴
        </Typography>
        <Grid container spacing={1}>
        {textList.map((item) => (
          <Fragment key={item.no}>
            <Grid item xs={12} md={2}>
              <Typography variant='body1' color='textSecondary'>
                {item.date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant='body1' color='textPrimary'>
                {item.content}
              </Typography>
            </Grid>
          </Fragment>
        ))}
          </Grid>
      </CardContent>
    </Card>
  )
};

export default HistoryBoard
