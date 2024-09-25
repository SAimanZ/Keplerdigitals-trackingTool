import React, { useState } from 'react';
import { Box, Stack } from '@mui/system';
import linkIcon from 'assets/images/link.png';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ProofsDropdown = ({ proofs }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '99.5%' }}>
      <Accordion
        expanded={open}
        onChange={() => setOpen(!open)}
        sx={{
          background: '#f4f4f4',
          position: 'absolute',
          width: { xs: '100%', md: '100%' },
          zIndex: '999',
          border: open ? '1px solid #8ab9db' : '0px',
          borderRadius: '0px'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#000', height: '30px', width: '30px' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // sx={{ borderBottom: open ? '1px solid' : 'none', minHeight: '50px !important' }}
          sx={{
            height: '64px',
            '&.Mui-expanded': {
              height: '60px !important'
            }
          }}
        >
          <Typography className="attributes-custom">PROOF OF AUTHENTICITY</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
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
              outline: '1px solid #8ab9db'
            },
            '& .MuiInput-underline:before': {
              borderBottom: 'none' // Remove the default underline
            },
            '& .MuiInput-underline:after': {
              borderBottom: 'none' // Remove the underline when focused
            },
            padding: '0px 16px 0px',
            minHeight: '64px'
          }}
        >
          {proofs && proofs.length
            ? proofs.map((item) => {
                return (
                  <>
                    <Box sx={{ borderBottom: '1px solid #838383', opacity: '0.2' }}></Box>
                    <Stack
                      sx={{ marginTop: '0.5em', flexDirection: 'row', justifyContent: 'space-between', padding: '8px 0px 8px 0px' }}
                      onClick={() => {
                        window.open(item?.fieldValue, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <Typography
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          window.open(item.fieldValue, '_blank', 'noopener,noreferrer');
                        }}
                        className="attributes-custom"
                      >
                        {item?.fieldName}
                      </Typography>
                      <Typography
                        sx={{ color: '#2F53FF', cursor: 'pointer' }}
                        onClick={() => {
                          window.open(item.fieldValue, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        {/* <img src={linkIcon} alt="open link" style={{ paddingLeft: '5px' }} /> */}
                        <svg width="25" height="25" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                            stroke="#0066B1"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                            stroke="#0066B1"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </Typography>
                    </Stack>
                  </>
                );
              })
            : ''}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
