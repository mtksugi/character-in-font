import React, { Fragment } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { fonts } from '../const/Fonts';

const tableList = [
  {name: 'fullName', title: 'フォントファミリー名'},
  {name: 'version', title: 'バージョン'},
  {name: 'trademark', title: '商標'},
  {name: 'manufacturer', title: 'メーカー名'},
  {name: 'designer', title: 'デザイナー'},
  {name: 'description', title: '説明'},
]

const FontDetail = ({ fontFile }) => {

  const font = fonts.find((item) => item.file === fontFile);

  return (
    <>
      {font && 
      <Card>
        <CardContent>
          <Typography variant='h5' component='h2' gutterBottom>
            フォント詳細情報
          </Typography>
          <Grid container spacing={1}>
            {
              tableList.map((item) => (
                <Fragment key={item.name}>
                  {font[item.name] &&
                    <>
                    <Grid item xs={12} md={2}>
                      <Typography variant='body1' color='textSecondary'>
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <Typography variant='body1' color='textPrimary'>
                        {font[item.name]}
                      </Typography>
                    </Grid>
                    </>
                  }
                </Fragment>)
              )
            }
          </Grid>
        </CardContent>
      </Card>
      }
    </>
  )
};

export default FontDetail;