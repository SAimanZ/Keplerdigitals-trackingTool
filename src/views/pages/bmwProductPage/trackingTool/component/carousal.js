import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@mui/styles';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  dotListStyle: {
    '& .react-multi-carousel-dot button': {
      [theme.breakpoints.up('xs')]: { width: '15px' },
      [theme.breakpoints.up('md')]: { width: '25px' },

      height: '4.44px',

      borderRadius: '0px',
      border: 'none',

      marginBottom: '30px',
      background: '#616161ab',
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.05)'
    },

    '& .react-multi-carousel-dot--active button': {
      background: '#fff'
    }
  }
}));
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 465 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselCard = ({ image, setimageIndex }) => {
  const classes = useStyles();
  const imageRef = useRef(null);

  useEffect(() => {
    setimageIndex(+imageRef.current.state.currentSlide);
  });

  return (
    <Carousel
      ref={imageRef}
      swipeable={true}
      draggable={true}
      showDots={true}
      arrows={true}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      // customTransition="all .5"
      // transitionDuration={500}
      containerClass="carousel-container"
      dotListClass={classes.dotListStyle}
      itemClass="carousel-item-padding-40-px"
    >
      {image?.map((item, index) => (
        <>
          <Box
            sx={{
              width: { xs: '100%', md: '612' },
              height: { xs: '274px', md: '525px' },
              background: '#262626',
              borderRadius: 0
            }}
          >
            <CardMedia
              key={index}
              component="img"
              sx={{
                width: { xs: '100%', md: '612' },
                height: { xs: '274px', md: '525px' },
                objectFit: { md: 'contain', xs: 'contain' },
                borderRadius: 0
              }}
              image={item.image}
              alt={item.title}
            />
          </Box>
        </>
      ))}
    </Carousel>
  );
};

export default CarouselCard;
