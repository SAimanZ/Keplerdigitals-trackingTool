import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

const TruncatedText = ({ text, limit }) => {
  const theme = useTheme();
  const [showFullText, setShowFullText] = useState(false);

  const textLength = text?.length;

  const truncatedText = text.slice(0, limit);

  const toggleShowText = (e) => {
    e.preventDefault();
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    if (textLength < limit) {
      setShowFullText(true);
    }
  }, [textLength, limit]);

  return (
    <Typography
      sx={{
        color: '#4a4848',
        fontWeight: 500,
        opacity: '0.899',
        fontSize: { xs: '13px', md: '16px' },
        textAlign: 'left',
        padding: '0 15px',
        lineHeight: '180%',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu !important',
        textTransform: 'capitalize',
        height: { md: '174px', xs: '199px' },

        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      }}
      variant="body"
    >
      {showFullText ? text : `${truncatedText}`}
      {textLength > limit && (
        <span>
          <Button
            onClick={toggleShowText}
            sx={{
              // border: '2px solid red',
              p: '0px',
              ml: '8px',
              fontWeight: 'bold',
              color: 'black'
            }}
          >
            {showFullText ? ' show less' : '... show more'}
          </Button>
        </span>
      )}
    </Typography>
  );
};

export default TruncatedText;
