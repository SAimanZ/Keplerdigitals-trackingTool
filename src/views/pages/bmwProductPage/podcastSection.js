import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import postcast1 from '../../../assets/images/postcast/postcard-1.png';
import postcast2 from '../../../assets/images/postcast/postcard-2.png';
import postcast3 from '../../../assets/images/postcast/postcard-3.png';
import postcast4 from '../../../assets/images/postcast/postcard-4.png';
import postcast5 from '../../../assets/images/postcast/postcard-5.png';
import postcast6 from '../../../assets/images/postcast/postcard-6.png';
import postcast7 from '../../../assets/images/postcast/postcard-7.png';
import postcast8 from '../../../assets/images/postcast/postcard-8.png';
import postcast0 from '../../../assets/images/postcast/postcard-0.png';
import postcastM3 from '../../../assets/images/postcast/postcastM3.png';
import postcastM2 from '../../../assets/images/postcast/postcastM2.png';
import postcastM5 from '../../../assets/images/postcast/postcastM5.png';
import postcastM0 from '../../../assets/images/postcast/postcastM0.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PodcastVideoPosters() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={12} md={8} sx={{ borderRight: '3px solid #fff' }}>
          <Card sx={{ width: '100%', height: { md: '578px' }, borderRadius: '0px' }}>
            <Box sx={{ position: 'relative', height: '100%' }}>
              <CardMedia component="img" image={postcast1} height="100%" />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '5%',
                  width: '100%',
                  bgcolor: 'transparent',
                  color: 'white'
                }}
              >
                <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-M' : 'ELECTRIC-MYTHS'} sx={{ color: '#fff' }}>
                  ELECTRIC MYTHS
                </Typography>
                <Typography variant="body2" className={isSmallScreen ? 'postcard-para-M' : 'postcard-para'} sx={{ color: '#fff' }}>
                  A video podcast about electric <br /> driving myths
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid container xs={12} md={4}>
          <Grid item xs={6} md={12} sx={{ border: { xs: '2px solid #fff' } }}>
            <Card sx={{ height: '289px', borderRadius: '0px' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="286px" image={isSmallScreen ? postcastM2 : postcast2} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '6%',
                    width: '100%',
                    bgcolor: 'transparent',
                    color: 'white'
                  }}
                >
                  <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                    ELECTRIC MYTHS
                  </Typography>
                  <Typography variant="body2" className={isSmallScreen ? 'postcard-para-2M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                    A video podcast {isSmallScreen && <br />} about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />}
                    myths
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6} md={12} sx={{ border: { xs: '2px solid #fff' } }}>
            <Card sx={{ width: '100%', height: '289px', borderRadius: '0px', borderBottom: '3px solid #fff' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="286px" image={isSmallScreen ? postcastM3 : postcast3} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '6%',
                    width: '100%',
                    bgcolor: 'transparent',
                    color: 'white'
                  }}
                >
                  <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                    ELECTRIC MYTHS
                  </Typography>
                  <Typography variant="body2" className={isSmallScreen ? 'postcard-para-2M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                    A video podcast {isSmallScreen && <br />} about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />}{' '}
                    myths
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} md={12}>
        <Grid item xs={12} md={4}>
          <Card sx={{ width: '100%', height: '286px', borderRadius: '0px' }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" width="100%" height="286px" image={postcast4} />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '6%',
                  width: '100%',
                  bgcolor: 'transparent',
                  color: 'white'
                }}
              >
                <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                  ELECTRIC MYTHS
                </Typography>
                <Typography variant="body2" className={isSmallScreen ? 'postcard-para-M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                  A video podcast about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />} myths
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{ borderLeft: '2px solid #fff' }}>
          <Card sx={{ width: '100%', height: '286px', borderRadius: '0px', borderLeft: '3px solid #fff' }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" width="100%" height="286px" image={isSmallScreen ? postcastM0 : postcast0} />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '6%',
                  width: '100%',
                  bgcolor: 'transparent',
                  color: 'white'
                }}
              >
                <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                  ELECTRIC MYTHS
                </Typography>
                <Typography variant="body2" className={isSmallScreen ? 'postcard-para-2M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                  A video podcast about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />} myths
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{ borderLeft: '2px solid #fff' }}>
          <Card sx={{ width: '100%', height: '286px', borderRadius: '0px', borderLeft: '3px solid #fff' }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" height="286px" image={postcast6} />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '6%',
                  width: '100%',
                  bgcolor: 'transparent',
                  color: 'white'
                }}
              >
                <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                  ELECTRIC MYTHS
                </Typography>
                <Typography variant="body2" className={isSmallScreen ? 'postcard-para-2M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                  A video podcast about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />} myths
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid container xs={12} md={4} sx={{ order: { xs: 2, md: 1 } }}>
          <Grid xs={6} md={12}>
            <Card sx={{ width: '100%', height: '289px', borderRadius: '0px', borderTop: { xs: '2px solid #fff ', md: '3px solid #fff' } }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="286px" image={postcast7} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '6%',
                    width: '100%',
                    bgcolor: 'transparent',
                    color: 'white'
                  }}
                >
                  <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                    ELECTRIC MYTHS
                  </Typography>
                  <Typography variant="body2" className={isSmallScreen ? 'postcard-para-2M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                    A video podcast about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />} myths
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={6} md={12}>
            <Card
              sx={{
                height: '289px',
                borderRadius: '0px',
                borderTop: { xs: '2px solid #fff ', md: '0px' },
                borderBottom: { xs: 'none', md: '3px solid #fff' },
                borderLeft: { xs: '2px solid #fff' }
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" width="100%" height="286px" image={postcast8} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '6%',
                    width: '100%',
                    bgcolor: 'transparent',
                    color: 'white'
                  }}
                >
                  <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-2M' : 'ELECTRIC-MYTHS-2'} sx={{ color: '#fff' }}>
                    ELECTRIC MYTHS
                  </Typography>
                  <Typography variant="body2" className={isSmallScreen ? 'postcard-para-2M' : 'postcard-para-2'} sx={{ color: '#fff' }}>
                    A video podcast about electric {!isSmallScreen && <br />} driving {isSmallScreen && <br />} myths
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} sx={{ borderLeft: '2px solid #fff', borderTop: '3px solid #fff', order: { xs: 1, md: 2 } }}>
          <Card sx={{ height: isSmallScreen ? '100%' : '571px', borderRadius: '0px', borderLeft: { xs: 'none', md: '3px solid #fff' } }}>
            <Box sx={{ position: 'relative', height: '100%' }}>
              <CardMedia component="img" image={postcast5} height={'100%'} />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '6%',
                  bgcolor: 'transparent',
                  color: 'white'
                }}
              >
                <Typography variant="h5" className={isSmallScreen ? 'ELECTRIC-MYTHS-M' : 'ELECTRIC-MYTHS'} sx={{ color: '#fff' }}>
                  ELECTRIC MYTHS
                </Typography>
                <Typography variant="body2" className={isSmallScreen ? 'postcard-para-M' : 'postcard-para'} sx={{ color: '#fff' }}>
                  A video podcast about electric <br /> driving myths
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
