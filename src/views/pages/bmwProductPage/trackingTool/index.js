import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Container } from '@mui/material';
import Product from './component/productView';
import Activity from './component/activity';
import { nftTrack } from 'redux/bmw/actions';
import galileo from '../../../../assets/images/galileo-white.png';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TrackAtribute from './component/trackAtribute';
import LinearProgress from '@mui/material/LinearProgress';
import moment from 'moment';
import './styles.css';
import kepler from 'assets/kepler.svg';

import checkAnimation from '../../../../utils/animations/checkAnimation.json';
import failAnimation from '../../../../utils/animations/crossAnimation.json';
import Header from 'views/pages/heading';
import Lottie from 'lottie-react';

const idsArray = [
  { serialId: 'GALCHA1' },
  { serialId: 'GALMBC1' },
  { serialId: 'GALVSC1' },
  { serialId: 'GALFAS1' },
  { serialId: 'GALFAS2' },
  { serialId: 'GALGUC2' },
  { serialId: 'GALDMT1' },
  { serialId: 'GALJAG1' },
  { serialId: 'KPLRRCA1' },
  { serialId: 'KPLRAB1' }
];

const TrackingTool = () => {
  const dispatch = useDispatch();
  const serialId = useParams().id;

  const [showLogo, setShowLogo] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthentication, setShowAuthentication] = useState(true);

  const tracker = useSelector((state) => state.BmwReducer.tracker);
  const loader = useSelector((state) => state.BmwReducer.loader);

  useEffect(() => {
    const match = idsArray.some((item) => item.serialId === serialId);

    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setTimeout(() => {
        if (match) {
          setIsAuthenticated('PRODUCT AUTHENTICATED');
        } else {
          setIsAuthenticated('AUTHENTICATION FAILED');
        }
      }, 1000);
    }, 1000);

    setTimeout(() => {
      if (match) {
        setShowAuthentication(false);
      }
    }, 3300);

    if (match) {
      dispatch(
        nftTrack({
          serialId: serialId
        })
      );
    }

    return () => {
      clearTimeout(logoTimer);
    };
  }, [serialId]);

  return (
    <>
      {showAuthentication && (
        <div className="authentication-container">
          {!isAuthenticated && <img src={kepler} alt="Galileo" className={`logo ${showLogo ? 'show' : 'hide'}`} />}
          {isAuthenticated === 'PRODUCT AUTHENTICATED' && (
            <>
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  textAlign: 'center'
                }}
              >
                <Lottie animationData={checkAnimation} loop={false} className="animation" />
                <Typography variant="h4" sx={{ marginTop: 2 }}>
                  {isAuthenticated}
                </Typography>
              </Container>
            </>
          )}
          {isAuthenticated === 'AUTHENTICATION FAILED' && (
            <>
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  textAlign: 'center'
                }}
              >
                <Lottie animationData={failAnimation} loop={false} className="animation" />
                <Typography variant="h4" sx={{ marginTop: 2 }}>
                  {isAuthenticated}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 4 }}>
                  This product is not recognized by our system. It might be counterfeited.
                </Typography>
              </Container>
            </>
          )}
        </div>
      )}

      {!showAuthentication && (
        <Grid container sx={{ background: 'white' }}>
          {loader ? (
            <Stack m={5} sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgress />
            </Stack>
          ) : (
            <>
              {tracker?.nft?.burnStatus?.isBurnt && (
                <>
                  <Grid item xs={12} lg={12} md={12} sx={{ padding: '50px 0 0 0' }}>
                    <Grid container sx={{ background: '#E6F0F7', height: '40px', justifyContent: 'center' }}>
                      <Typography className="productheading" variant="h2" component="div">
                        This product no more exists and on{' '}
                        {moment(tracker?.nft?.burnStatus?.burnTime ? tracker?.nft?.burnStatus?.burnTime * 1000 : Date.now()).format(
                          'DD/MM/YY'
                        )}{' '}
                        it was made invalid by <span className="username123">{tracker?.nft?.burnStatus?.burntByUser?.fullName}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}
              {tracker ? (
                <>
                  <Grid item md={12} xs={12}>
                    <Header />
                  </Grid>
                  <Grid item md={12} xs={12} lg={12} sx={{ padding: { md: '40px 50px 40px 50px', xs: '0px' } }}>
                    <Grid container-fluid>
                      <Grid item md={12} xs={12}>
                        <Grid container>
                          <Grid item md={12} xs={12}>
                            <Product tracker={tracker} />
                          </Grid>
                          {tracker?.nft?.attributes?.length > 0 && (
                            <Grid item md={12} xs={12}>
                              <TrackAtribute tracking={tracker} />
                            </Grid>
                          )}
                          <Grid item md={12} xs={12}>
                            <Activity tracking={tracker?.activity} nft={tracker?.nft} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : (
                ''
              )}
              {/*  <Grid item md={12} xs={12} lg={12} className="footer-BMW">
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Typography color="#fff" className="footer-text" variant="h3" component="div" sx={{ textTransform: 'capitalize' }}>
                    Powered by
                  </Typography>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <img src={kepler} className="footerImage" width="auto" height="100px" />
                  </Grid>
                </Grid>
              </Grid> */}
            </>
          )}
        </Grid>
      )}
    </>
  );
};

export default TrackingTool;
