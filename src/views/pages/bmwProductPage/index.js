import React from 'react';
// import Header from './header';
// import BMWProducts from './bmwProducts';
// import PodcastVideoPosters from './podcastSection';
import { Grid, Box, Typography } from '@mui/material';
import CrossAnimation from 'ui-component/animations/CrossAnimation';
// import galileo from '../../../assets/images/galileo-white.png';
// import Container from '@material-ui/core/Container';
const index = () => {
  return (
    <>
      {/*  // header */}
      {/*  <Header /> */}
      <Grid item xs={12} sx={{ padding: { lg: '40px  0 40px 100px' } }}>
        <CrossAnimation />
      </Grid>
      {/*   <Box sx={{ padding: { lg: '40px 0 0 0' } }}>
        <Box>
          <PodcastVideoPosters />
        </Box>
      </Box>
      <Grid item md={12} xs={12} lg={12} className="footer-BMW">
        <Grid container sx={{ justifyContent: 'center' }}>
          <Typography
            color="#fff"
            className="footer-text"
            variant="h3"
            component="div"
            sx={{ textTransform: 'capitalize', mt: { xs: 3.3, md: 7 } }}
          >
            Powered by
          </Typography>
          <Grid container sx={{ justifyContent: 'center' }}>
            <img src={galileo} className="footerImage" width="auto" height="100px" />
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
};

export default index;
