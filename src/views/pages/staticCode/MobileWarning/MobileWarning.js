import { Container, Grid, Typography } from '@mui/material';

const MobileWarning = () => {
  return (
    <Grid item xs={12}>
      <Container>
        <Grid xs={12} mt={2} textAlign="center">
          <Typography variant="h1" color="primary" display={'flex'} justifyContent={'center'}>
            BMW Protocol
          </Typography>
        </Grid>
        <Grid xs={12} mt={20} textAlign="center" mb={5}>
          <Typography variant="h2">Not Supported</Typography>
          <Typography variant="h5">
            Mobile devices are not yet supported. <br /> Please use the desktop version.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MobileWarning;
