import React, { useEffect, useState } from 'react';
import './styles.css';
import Lottie from 'lottie-react';
import kepler from 'assets/kepler.svg';

import failAnimation from '../../../utils/animations/crossAnimation.json';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

export const ErrorPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 1000);
    }, 1000);

    return () => {
      clearTimeout(logoTimer);
    };
  }, []);
  return (
    <div className="authentication-container">
      {!isAuthenticated && <img src={kepler} alt="Galileo" className={`logo ${showLogo ? 'show' : 'hide'}`} />}

      {isAuthenticated && (
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
              AUTHENTICATION FAILED
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 4 }}>
              This product is not recognized by our system. It might be counterfeited.
            </Typography>
          </Container>
        </>
      )}
    </div>
  );
};
