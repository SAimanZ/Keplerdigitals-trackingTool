import React, { forwardRef } from 'react';
import { Dialog, Grid, Typography, Slide } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

// slide animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function SelectDocument({ open, setOpen, setItems, items }) {
  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    dialogPaper: {
      [theme.breakpoints.up('xs')]: {
        justifyContent: 'center',
        width: '332px',
        height: '220px',
        borderRadius: '8px',
        maxHeight: 'max-content !important',
        overflow: 'hidden',
        padding: '0 !important'
      }
    }
  }));
  const classes = useStyles();
  const closeIcon = (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 13.9997L18.6667 9.33301M18.6667 9.33301H15.1667M18.6667 9.33301V12.833"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 14.0003L9.33333 18.667M9.33333 18.667H12.8333M9.33333 18.667V15.167"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66699 14.0003C4.66699 9.60055 4.66699 7.40066 6.03383 6.03383C7.40066 4.66699 9.60055 4.66699 14.0003 4.66699C18.4001 4.66699 20.6 4.66699 21.9668 6.03383C23.3337 7.40066 23.3337 9.60055 23.3337 14.0003C23.3337 18.4001 23.3337 20.6 21.9668 21.9668C20.6 23.3337 18.4001 23.3337 14.0003 23.3337C9.60055 23.3337 7.40066 23.3337 6.03383 21.9668C4.66699 20.6 4.66699 18.4001 4.66699 14.0003Z"
        stroke="black"
        stroke-width="1.5"
      />
    </svg>
  );
  return (
    <div>
      <Dialog
        sx={{ padding: '0 !important' }}
        classes={{ paper: classes.dialogPaper }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        // sx={{ width: '80%', margin: '0 auto', maxHeight: '500px' }}
      >
        {/* <Grid item xs={12} onClick={handleClose} sx={{ position: 'absolute', top: '5px', right: '5px' }}>
          {closeIcon}
        </Grid> */}
        <Grid container sx={{ pr: 2.5, pl: 2.5 }}>
          <Grid item xs={12} md={12} lg={12} sx={{ p: 2.5 }}>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
              <Grid item xs={12} sx={{ textAlign: 'center', maxHeight: '150px', overflowY: 'auto' }}>
                <Typography fontSize={'16px'} lineHeight={'1.8'} color="#020202" fontFamily={'Public Sans'} fontWeight={500}>
                  {items?.trait_type}
                </Typography>
                <Typography fontSize={'16px'} variant="h5" fontWeight="700" fontFamily={'Public Sans'}>
                  {items?.value}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
