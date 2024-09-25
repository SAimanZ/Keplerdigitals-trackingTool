import React from 'react';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Box, Container, makeStyles, Typography, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { allProducts } from 'redux/bmw/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../heading';
import galileo from '../../../assets/images/galileo-white.png';
import BMWProducts from './bmwProducts';
import Stack from '@mui/material/Stack';

// Styles
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%',
    [theme.breakpoints.up('xs')]: {
      height: '900px'
    },
    [theme.breakpoints.up('md')]: {
      height: '700px'
    }
  },
  heading: {
    [theme.breakpoints.up('xs')]: {
      color: '#000',
      fontFamily: 'Ubuntu',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      color: '#000',
      fontFamily: 'Ubuntu',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(2) // Add space below the heading
    }
  },
  form: {
    [theme.breakpoints.up('xs')]: { width: 'auto' },
    [theme.breakpoints.up('md')]: { width: '598px' }
  },
  fieldWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: '0px'

    // padding: theme.spacing(1, 2)
  },

  field: {
    '&::placeholder': {
      [theme.breakpoints.up('xs')]: {
        color: '#000',
        fontFamily: 'Ubuntu',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        opacity: 1 // This is to make the color fully opaque.
      },
      [theme.breakpoints.up('md')]: {
        color: '#000',
        fontFamily: 'Ubuntu',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        opacity: 1 // This is to make the color fully opaque.
      }
    },
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5),
    width: '100%',
    [theme.breakpoints.up('xs')]: { height: '50px' },
    [theme.breakpoints.up('md')]: { height: '70px' },

    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    outline: 'none',
    border: 'none',
    textAlign: 'left',
    backgroundColor: '#F4F4F4'
  },
  button: {
    [theme.breakpoints.up('xs')]: {
      position: 'absolute',
      right: 8,
      width: '101px',
      height: '40px',
      backgroundColor: '#fff',
      color: 'black',
      border: '1px solid #000',
      borderRadius: '1px',
      '&:hover': {
        backgroundColor: '#fff'
      },
      fontFamily: 'Ubuntu',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textAlign: 'center'
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 8,
      width: '145px',
      height: '60px',
      backgroundColor: '#fff',
      color: 'black',
      border: '1px solid #000',
      borderRadius: '1px',
      '&:hover': {
        backgroundColor: '#fff'
      },
      fontFamily: 'Ubuntu',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textAlign: 'center'
    }
  },
  note: {
    [theme.breakpoints.up('xs')]: { fontSize: '12px' },
    [theme.breakpoints.up('md')]: { fontSize: '16px' },
    color: '#4A4848',
    textAlign: 'center',
    fontFamily: 'Ubuntu',

    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '180%', // 28.8px
    marginTop: theme.spacing(2) // Add space above the note
  },
  link: {
    color: '#4A4848',
    fontFamily: 'Ubuntu',
    [theme.breakpoints.up('xs')]: { fontSize: '12px' },
    [theme.breakpoints.up('md')]: { fontSize: '16px' },
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '180%',
    textDecorationLine: 'underline'
  },
  error: {
    color: 'red',
    marginTop: theme.spacing(1)
  }
}));

// App component
const bmwTrackBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts({}));
  }, []);
  // const bmwProduct = useSelector((state) => state.BmwReducer.bmwUser);
  const navigate = useNavigate();
  // const serialmatch = bmwProduct?.nfts.map((value) => value.serialId);
  const bmwProduct = useSelector((state) => state.BmwReducer.bmwUser);

  const handleTrackNFT = (product) => {};
  return (
    <>
      {!bmwProduct?.nfts ? (
        <Stack m={5} sx={{ width: { xs: '100%', md: '100%' }, margin: '0 auto', color: 'grey.500' }} spacing={2}>
          <LinearProgress />
        </Stack>
      ) : (
        <>
          <Grid item md={12} xs={12}>
            <Header />
          </Grid>
          <Container component="main" maxWidth="md" className={classes.container}>
            <Typography component="h1" variant="h5" className={classes.heading}>
              TRACK YOUR PRODUCT
            </Typography>
            <Formik
              initialValues={{
                example: ''
              }}
              validate={(values) => {
                // const count = bmwProduct != undefined && bmwProduct?.count; // Example count value, you can adjust it

                function isValidValue(value) {
                  // const pattern = new RegExp(`^GALBMW[1-${count}]$`);

                  if (values?.example) {
                    return true;
                  }

                  return false;
                }

                let errors = {};
                // const match = serialmatch?.find((value) => value == values.example);
                if (!values.example.trim()) {
                  errors.example = 'Enter Serial ID';
                } else if (!isValidValue(values.example)) {
                  errors.example = 'Invalid Serial ID';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);

                  // Handle the "Track This NFT" button click event here
                  const product = values.example;
                  // const match = serialmatch?.find((value) => value == product);

                  if (values.example) {
                    navigate('/trackingTool/' + product, {
                      state: {}
                    });
                  }
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting, values, errors, touched, setFieldValue }) => (
                <Form className={classes.form}>
                  <Box margin={1} className={classes.fieldWrapper}>
                    <input
                      name="example"
                      type="text"
                      placeholder={values.example ? '' : 'Enter Serial Number'}
                      className={classes.field}
                      value={values.example}
                      onChange={(event) => setFieldValue('example', event.target.value)}
                    />
                    <Button variant="contained" disabled={isSubmitting} onClick={submitForm} className={classes.button}>
                      Track
                    </Button>
                  </Box>
                  {touched.example && errors.example && <div className={classes.error}>{errors.example}</div>}
                  {isSubmitting && <LinearProgress />}
                </Form>
              )}
            </Formik>
            {/*    <Typography variant="body1" className={classes.note}>
          By initiating authentication, you declare that you accept our{' '}
          <a href="/legal" className={classes.link}>
            legal Notice
          </a>{' '}
          and{' '}
          <a href="/privacy" className={classes.link}>
            Privacy Policy
          </a>
        </Typography> */}
            <BMWProducts bmwProduct={bmwProduct} />
          </Container>
        </>
      )}
    </>
  );
};

export default bmwTrackBar;
