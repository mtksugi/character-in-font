import React from 'react';
import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Check } from '@mui/icons-material';

const textList = [
  {
    no: 1, content: 'このページでは、True Typeフォントに含まれる文字を調べることができます。',
  },
  {
    no: 2, content: '選択したフォントがお使いの端末にインストールされている場合は、表の「文字」には選択したフォントの文字が表示されます。',
  },
  {
    no: 3, content: 'フォント詳細情報はフォントファイルに格納された内容です。',
  },
]
const Board = () => {

  return (
    <Card>
      <CardContent>
        <List>
          {textList.map((item) => (
          <ListItem disablePadding key={item.no}>
            <ListItemIcon sx={{ mr: -2}}>
              <Check fontSize='small' />
            </ListItemIcon>
            <ListItemText>
              {item.content}
            </ListItemText>
          </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
};

export default Board
