import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import imgMap from '../../../../../assets/images/icons/googleMap.svg';
import corssImg from '../../../../../assets/images/icons/cross.svg';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';

import {
  ButtonGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  DialogContentText,
  Typography,
  Grid,
  IconButton
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function FullImage({ open, setOpen, image, imageIndex, serialID }) {
  const useStyles = makeStyles((theme) => ({
    dialogPaper: {
      [theme.breakpoints.up('xs')]: {
        width: '408px',
        height: 'auto',
        borderRadius: 0,

        maxHeight: 'max-content !important',
        overflow: 'hidden',
        padding: '0 !important'
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
        height: '562px',
        borderRadius: 0,
        maxHeight: 'max-content !important',
        overflow: 'hidden',
        padding: '0 !important',
        background: 'transparent'
      }
    }
  }));
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        sx={{ padding: '0 !important', background: '#020101db !important ' }}
        classes={{ paper: classes.dialogPaper }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title1"
        aria-describedby="alert-dialog-slide-description1"
        maxWidth="md"
      >
        <DialogContent sx={{ padding: '0 !important' }}>
          <Grid xs={12} sx={{ position: 'absolute', top: '20px', right: '23px' }}>
            <ButtonGroup sx={{ background: 'white', marginLeft: '10px', borderRadius: 'none', height: '42px' }}>
              <button onClick={handleClose} style={{ border: 'none', backgroundColor: 'white' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.6665 14C4.6665 9.60022 4.6665 7.40033 6.03334 6.0335C7.40017 4.66666 9.60006 4.66666 13.9998 4.66666C18.3996 4.66666 20.5995 4.66666 21.9663 6.0335C23.3332 7.40033 23.3332 9.60022 23.3332 14C23.3332 18.3998 23.3332 20.5997 21.9663 21.9665C20.5995 23.3333 18.3996 23.3333 13.9998 23.3333C9.60006 23.3333 7.40017 23.3333 6.03334 21.9665C4.6665 20.5997 4.6665 18.3998 4.6665 14Z"
                    stroke="black"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12.6001 15.4H9.8001M12.6001 15.4V18.2M12.6001 15.4L9.33343 18.6667"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3998 12.6H18.1998M15.3998 12.6V9.8M15.3998 12.6L18.6665 9.33333"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </ButtonGroup>
          </Grid>

          <CardMedia
            // key={index}
            component="img"
            sx={{
              width: '100%',
              height: 'auto',

              borderRadius: 0
            }}
            image={image?.[imageIndex].image}
            // alt={item.title}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
