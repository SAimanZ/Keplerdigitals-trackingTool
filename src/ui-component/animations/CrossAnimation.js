import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
// import animationData from '../../utils/animations/crossAnimation.json';
import checkAnimation from '../../utils/animations/checkAnimation.json';
import kepler from 'assets/kepler.svg';

import './styles.css';

const CrossAnimation = () => {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);
  // const [isFailed, setIsFailed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      // setIsFailed(true);
      setTimeout(() => {
        // setIsFailed(false);
        setIsAuthenticated(true);
      }, 1000);
    }, 1000);

    const successTimer = setTimeout(() => {
      navigate('/trackingTool/1');
    }, 3300);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(successTimer);
    };
  }, [navigate]);

  return (
    <div className="authentication-container">
      {!isAuthenticated && <img src={kepler} alt="Galileo" className={`logo ${showLogo ? 'show' : 'hide'}`} />}
      {isAuthenticated && (
        <>
          <Lottie lo animationData={checkAnimation} loop={true} className="animation" />
          <div className="text">{isAuthenticated ? 'PRODUCT AUTHENTICATED' : 'AUTHENTICATION FAILED'}</div>
        </>
      )}
      {/* {isFailed && (
        <>
          <Lottie animationData={animationData} loop={true} className="animation" />
          <div className="text">Authentication failed</div>
        </>
      )} */}
    </div>
  );
};

export default CrossAnimation;
