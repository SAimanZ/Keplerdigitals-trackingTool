import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, CardMedia, Typography, LinearProgress, Button, Divider, styled } from '@mui/material';
// import car from '../../../assets/images/4.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from 'redux/bmw/actions';
import Avatar from 'ui-component/extended/Avatar';

const useStyles = makeStyles({
  root: {
    padding: 16
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    height: 270, // Adjust the height of the car image as needed
    width: '100%',
    objectFit: 'cover' // Make sure the image covers the entire container
  },
  button: {
    // Align the button to the bottom of the card
  }
});

const BMWProducts = ({ bmwProduct }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts({}));
  }, []);

  const handleTrackNFT = (product) => {
    navigate('/trackingTool/' + product, {
      state: {}
    });
  };
  const ZoomCardMedia = styled(CardMedia)({
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {bmwProduct?.nfts.map((product) => (
          <Grid item xs={12} sm={4} md={6} lg={6} mb={2} sx={{ textAlign: 'center' }}>
            <Card className="bmw-card" onClick={() => handleTrackNFT(product?.serialId)}>
              <ZoomCardMedia className="bmw-media" image={product?.nft?.image} title="car" />
              <CardContent sx={{ display: 'flex' }} className="cardcontent-padding">
                <Grid item xs={1.5} sm={6} md={2} sx={{ alignSelf: 'center' }}>
                  <Avatar alt="User 1" src={product?.nft?.currentOwnerUser?.picUrl} className="logo-size" />
                </Grid>
                <Grid item xs={5} sm={6} md={4} sx={{ alignSelf: 'center' }}>
                  <Typography variant="h5" component="h3" className="logo-text" sx={{ float: { xs: 'left', md: 'left' } }}>
                    {product?.nft?.currentOwnerUser?.fullName?.split(' ')[0] ||
                      product?.nft?.currentOwner?.slice(0, 5) + '...' + product?.nft?.currentOwner?.slice(38, 42)}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} sx={{ alignSelf: 'center' }}>
                  <Typography variant="h5" component="h3" className="brand-value" sx={{ float: { md: 'right' } }}>
                    {product?.nft?.categoryName}
                  </Typography>
                </Grid>
              </CardContent>
              <Divider sx={{ margin: '7px 15px' }} />
              <CardContent sx={{ display: 'flex' }} className="front-content-padding">
                <Grid item xs={12} sm={6} md={6} key={product.id}>
                  <Typography variant="h5" component="h3" className="bmw-text" sx={{ float: { md: 'left' } }}>
                    SerialID
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} key={product.id}>
                  <Typography variant="h5" component="h3" className="bmw-value" sx={{ float: { md: 'right' }, cursor: 'pointer' }}>
                    {product?.serialId}
                  </Typography>
                </Grid>
              </CardContent>
              <CardContent sx={{ display: 'flex' }} className="cardcontent-padding">
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h5" component="h3" className="bmw-text" sx={{ float: { md: 'left' } }}>
                    in Price
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h5" component="h3" className="bmw-value" sx={{ float: { md: 'right' } }}>
                    {product?.nft?.price ? product?.nft?.price : 'N/A'}
                  </Typography>
                </Grid>
              </CardContent>
              <CardContent sx={{ display: 'flex' }} className="cardcontent-padding">
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h5" component="h3" className="bmw-text" sx={{ float: { md: 'left' } }}>
                    Time
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <Typography variant="h5" component="h3" className="bmw-value" sx={{ float: { md: 'right' } }}>
                    12:29, 12/3/2023
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BMWProducts;
