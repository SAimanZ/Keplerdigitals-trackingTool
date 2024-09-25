import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
// import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';
// import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAnalyticsWrapper from './wrappers/GoogleAnalyticsWrapper';
import ReactGA from 'react-ga4';
import { useMediaQuery, useTheme } from '@mui/material';
import MobileWarning from './views/pages/staticCode/MobileWarning/MobileWarning';

// ==============================|| APP ||============================== //

const measurementId = 'G-VX5VS79J6Z';
ReactGA.initialize(measurementId);

const App = () => {
  const customization = useSelector((state) => state.customization);
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));

  // if (matchMD) return <MobileWarning />;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <ToastContainer autoClose={8000} />
        <NavigationScroll>
          <>
            <GoogleAnalyticsWrapper>
              <Routes />
            </GoogleAnalyticsWrapper>
            <Snackbar />
          </>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
