import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import imgMap from '../../../../../assets/images/icons/googleMap.svg';
import corssImg from '../../../../../assets/images/icons/cross.svg';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  DialogContentText,
  Typography,
  Box,
  Grid,
  IconButton
} from '@mui/material';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function MapNFTDialog({ open, setOpen, tracker }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const AnyReactComponent = ({ text, tracker }) => (
    <div
      style={{
        color: 'red',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <LocationOnSharpIcon fontSize="large" />
      {text}
    </div>
  );
  const findLocation = tracker && tracker.find((attr) => attr.display_type === 'Location' && attr.primaryLocation === true);
  const locCheck = findLocation ? findLocation : '';
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);
  const [city, setCity] = useState('');

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${locCheck?.countryCode}+${locCheck?.value}&key=AIzaSyCjiR23tgo8Vecvcuj1WIg3OmUSquGvtD4`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      setLat(result.results?.[0].geometry.location.lat);
      setLng(result.results?.[0].geometry.location.lng);
      if (result.results?.[0]?.address_components) {
        const cityName = result.results?.[0]?.address_components.find((d) => d.types[0] === 'locality');
        setCity(cityName?.long_name);
      }
    })
    .catch((error) => {});
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 5
  };
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title1"
        aria-describedby="alert-dialog-slide-description1"
        maxWidth="lg"
        PaperProps={{
          style: {
            width: '95%',
            margin: '0 auto',
            borderRadius: '0px'
          }
        }}
      >
        <DialogTitle id="alert-dialog-slide-title1" sx={{ padding: '16px 0px !important' }}>
          <Grid container sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Grid className="statusHeading" xs={2} sx={{ alignSelf: 'center' }}>
              Map
            </Grid>
            <Grid item xs={0.5} sx={{ borderLeft: '1px solid lightgray', height: '24px', marginTop: '6px' }}></Grid>
            <Grid xs={9.5} sx={{ alignItems: 'center', display: 'flex' }}>
              <span className="map-header">{locCheck?.trait_type} </span>
              <span className="map-country">{city && `(${locCheck?.value}) ${city}`}</span>
              <Box>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank')}
                  endIcon={<img src={imgMap} alt="map-small" />}
                  sx={{
                    color: '#4B4949',
                    borderColor: 'black',
                    borderRadius: '0px',
                    width: '110px !important',
                    height: '34px !important',
                    padding: '0px !important'
                  }}
                >
                  Google Map
                </Button>
              </Box>

              <Box>
                <Button
                  className="closeButton"
                  variant="outlined"
                  onClick={handleClose}
                  sx={{ color: 'black', borderColor: 'black', borderRadius: '0px' }}
                >
                  <img src={corssImg} alt="cross" />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: { xs: 'none', md: 'flex' }, textAlign: 'center' }}>
            <Grid className="statusHeading" xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Map
            </Grid>
            <Grid item xs={0.3} sx={{ borderLeft: '1px solid lightgray', height: '22px', marginTop: '13px' }}></Grid>

            <Grid xs={4} mt={0.6} sx={{ display: 'flex', alignItems: 'center' }}>
              <span className="map-header">{locCheck?.trait_type} :</span>
              <span className="map-country">{city && `(${locCheck?.value}) ${city}`}</span>
            </Grid>
            <Grid xs={3.7}></Grid>
            <Grid xs={3} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank')}
                endIcon={<img src={imgMap} alt="map-small" />}
                sx={{ color: '#4B4949', borderColor: 'black', borderRadius: '0px' }}
              >
                Google Map
              </Button>
              <Button variant="outlined" onClick={handleClose} sx={{ color: 'black', borderColor: 'black', borderRadius: '0px' }}>
                <img src={corssImg} alt="cross" />
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent style={{ width: { xs: '384px', md: '1002px' }, height: { xs: '524px', md: '450px' } }}>
          <div
            className="map"
            style={{
              width: { md: '946px', xs: '384px' },
              height: { md: '500px', xs: '524px' },
              margin: '0 auto'
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCjiR23tgo8Vecvcuj1WIg3OmUSquGvtD4' }}
              center={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              options={{
                zoomControl: false
              }}
            >
              <AnyReactComponent lat={lat} lng={lng} text={''} />
            </GoogleMapReact>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
