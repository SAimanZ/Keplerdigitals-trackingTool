import { Link as RouterLink } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import '@fontsource/public-sans';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

import { useSelector } from 'react-redux';

import 'react-multi-carousel/lib/styles.css';

const HeaderAnimationImage = styled('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

const Header = () => {
  const theme = useTheme();

  return (
    <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid transparent' }}>
      <Grid container-fluid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={gridSpacing}
          sx={{ mt: { xs: 10, sm: 6, md: 10 }, mb: { xs: 2.5, md: 10 }, paddingLeft: { xs: '10px', md: '110px' } }}
        >
          <Grid item xs={12} md={8}>
            <>
              <Grid
                container
                sx={{
                  justifyContent: 'flex-start'
                }}
              >
                <Grid item>
                  <AnimateButton>
                    <Button
                      className="create"
                      component={RouterLink}
                      to="/track"
                      size="large"
                      variant="contained"
                      sx={{ color: '#C7C7C7', mt: { xs: 1, sm: 1.5, md: 2.5 } }}
                    >
                      BMW NFT
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  color="inherit"
                  sx={{
                    color: '#ffffff',
                    fontFamily: 'Ubuntu !important',
                    fontStyle: 'normal',

                    textTransform: 'capitalize  !important',
                    fontSize: { xs: '1rem', md: '22px', lg: '22px' },
                    fontWeight: 400,
                    mt: { xs: 2, sm: 4, md: 1 },
                    lineHeight: { xs: 1.4, sm: 1, md: 1.4, lg: '36px' }
                  }}
                >
                  Wild at Art
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: 'Ubuntu !important',
                    fontStyle: 'normal !important',
                    fontWeight: '400',

                    lineHeight: ' 110%',

                    fontSize: { xs: '2.25rem', sm: '3rem', md: '77px', lg: '82px' },
                    // lineHeight: { xs: '1.2', sm: '1', md: '84px', lg: '86px' },
                    textTransform: 'uppercase',
                    color: '#fff'
                  }}
                >
                  Julie Mehretu designs BMW Art
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <>
                  <Grid
                    container
                    sx={{
                      justifyContent: 'flex-start'
                    }}
                  >
                    <Grid item>
                      <AnimateButton>
                        <Button
                          className="ReadMore"
                          component={RouterLink}
                          to="/"
                          size="large"
                          variant="outlined"
                          sx={{ color: '#ffffff', mt: { xs: 1, sm: 1.5, md: -1 } }}
                        >
                          Read more
                        </Button>
                      </AnimateButton>
                    </Grid>
                  </Grid>
                </>
              </motion.div>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'none' } }}>
            <Box
              sx={{
                width: '290px',
                animation: '10s slideY linear infinite'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              ></motion.div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
