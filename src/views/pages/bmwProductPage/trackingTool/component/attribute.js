import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '@fontsource/public-sans';
// material-ui
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { MenuItem, Menu, Card, CardContent, Tooltip } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import DocLight from './docLight';
import Avatar from 'ui-component/extended/Avatar';
import { Pagination } from '@mui/material';
import leftImage from '../../../../../assets/images/icons/left-icon.svg';
import rightImage from '../../../../../assets/images/icons/right.svg';
import logo01 from '../../../../../assets/images/logo01.png';
import { activityIcons } from './list';
// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';

import { formatString } from 'utils/formatString';
import { Stack } from '@mui/system';
import moment from 'moment';
// ==============================|| ACCORDION ||============================== //

const attribute = ({ tracking, data, defaultExpandedId = null, expandIcon, square, toggle, createdBy, createdByUser, createdAt }) => {
  const theme = useTheme();
  let location = useLocation();

  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    if (toggle) setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(defaultExpandedId);
  }, [defaultExpandedId]);
  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filterFirstSerial = [];

  tracking.filter((d) => filterFirstSerial.push(d));
  const currentCards = filterFirstSerial?.slice(indexOfFirstCard, indexOfLastCard);
  const count = Math.ceil(tracking.length / 12);
  const pages = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <Box sx={{ width: '100%' }}>
      {data &&
        data.map((item) => (
          <MuiAccordion
            sx={{ background: '#F4F4F4' }}
            m={3}
            key={item.id}
            defaultExpanded={!item.disabled && item.defaultExpand}
            expanded={(!toggle && !item.disabled && item.expanded) || (toggle && expanded === item.id)}
            disabled={item.disabled}
            square={square}
            onChange={handleChange(item.id)}
          >
            <MuiAccordionSummary expandIcon={expandIcon || expandIcon === false ? expandIcon : <ExpandMoreIcon sx={{ color: '#000' }} />}>
              <span className="attribute-title"> {item.title}</span>
              {/*  {location.pathname.includes('KPLRAB1') && <span className="history-update-reason">Updated DEFMIK's artistic details</span>} */}
            </MuiAccordionSummary>
            <Stack mx={2}>
              <Divider sx={{ borderBottom: '1px solid #8885854d' }} />
            </Stack>
            <MuiAccordionDetails>
              <Grid
                item
                container
                className=""
                sx={{
                  pl: 1.5,
                  pb: { xs: 3, md: 1 },
                  background: '#F4F4F4'
                }}
              >
                <Grid item xs={5} md={3} sx={{ padding: '8px 0' }}>
                  <Typography variant="body" className="date-logo-name-bar">
                    Date:
                    <Box variant="span" className="date-logo" ml={3}>
                      {createdAt && moment.unix(createdAt).format('ddd MMM DD YYYY')}
                      {/* {Date(tracking?.nft?.createdAt).slice(0, 15)} */}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={1} md={1} sx={{ borderLeft: '2px solid lightgray', height: '26px', marginTop: '13px' }}></Grid>
                <Grid item xs={5} md={8} sx={{ display: 'flex', padding: '8px 0' }}>
                  <Grid item xs={2}>
                    <Typography variant="body" className="date-logo-name-bar" sx={{ float: { md: 'right' } }}>
                      Created by:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ display: 'flex' }}>
                    {createdByUser && (
                      <Avatar
                        alt="User 1"
                        src={createdByUser.picUrl}
                        sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                      />
                    )}

                    <Typography align="left" ml={1} variant="body" className="attribute-update">
                      {createdByUser?.fullName ? createdByUser.fullName : ''}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  pl: 1.5,
                  pb: { xs: 3, md: 0 },
                  background: '#F4F4F4',
                  // display: { md: 'flex' },
                  maxHeight: { md: '300px' },
                  maxWidth: '98% !important',
                  margin: '0 auto'
                }}
              >
                <Grid container justifyContent="left" spacing={2} sx={{ textAlign: 'center', mb: 5 }}>
                  {currentCards?.map(
                    (item, index) =>
                      item?.trait_type && (
                        <>
                          <Grid item xs={12} md={2}>
                            <Card
                              className="card-style"
                              sx={{
                                background: item?.trait_type === 'Serial ID' ? '#0066B1' : null
                                // border: '1px solid #2F53FF',
                                // background:
                                //   theme.palette.mode === 'dark'
                                //     ? item?.trait_type === 'Serial ID' && 'linear-gradient(to top right, #2F53FF ,#2FC1FF)'
                                //     : '#fff'
                              }}
                            >
                              <CardContent>
                                <Tooltip placement="top" title={item?.trait_type}>
                                  <Typography
                                    className={item?.trait_type === 'Serial ID' ? 'Engine-deafult' : 'Engine'}
                                    style={{
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      width: '95%',
                                      textAlign: 'center',
                                      margin: '0 auto',
                                      height: '2.5em'
                                    }}
                                    variant="h3"
                                    sx={{
                                      color: null
                                    }}
                                  >
                                    {item?.trait_type
                                      ? formatString(item?.trait_type).map((line, index) => <span key={index}>{line}</span>)
                                      : '0'}
                                  </Typography>
                                </Tooltip>
                                <Tooltip
                                  placement="bottom"
                                  title={
                                    item?.display_type == 'Date' && moment(item?.value).format('ddd MMM DD YYYY') !== 'Invalid Date'
                                      ? moment(item?.value).format('ddd MMM DD YYYY')
                                      : item?.value
                                  }
                                >
                                  <Typography
                                    variant="h6"
                                    // className="V8"
                                    className={item?.trait_type === 'Serial ID' ? 'centerText-default' : 'centerText'}
                                    sx={{
                                      cursor: 'pointer'
                                    }}
                                  >
                                    {item?.display_type == 'Date' && moment(item?.value).format('ddd MMM DD YYYY') !== 'Invalid Date'
                                      ? moment(item?.value).format('ddd MMM DD YYYY')
                                      : item?.value?.length > 15
                                      ? item.value.slice(0, 15) + '..'
                                      : item?.value}
                                  </Typography>
                                </Tooltip>
                              </CardContent>
                            </Card>
                          </Grid>
                        </>
                      )
                  )}
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Box variant="div" className="pagination-button" onClick={() => setCurrentPage((old) => Math.max(1, old - 1))}>
                  {currentPage == '1' ? activityIcons.lefticon : activityIcons.lefticonActive}
                </Box>

                {pages.map((num, index) => (
                  <Box
                    key={index}
                    variant="div"
                    className={num === currentPage ? 'pagination-num-active' : 'pagination-num'}
                    onClick={() => setCurrentPage(num)}
                    sx={{ cursor: 'pointer' }}
                  >
                    {num.toString().padStart(2, '0')}
                  </Box>
                ))}

                <Box variant="div" className="pagination-button" onClick={() => setCurrentPage((old) => Math.min(count, old + 1))}>
                  {currentPage == count ? activityIcons.righticon : activityIcons.righticonActive}
                </Box>
              </Grid>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
    </Box>
  );
};

attribute.propTypes = {
  data: PropTypes.array,
  defaultExpandedId: PropTypes.string,
  expandIcon: PropTypes.object,
  square: PropTypes.bool,
  toggle: PropTypes.bool
};

export default attribute;
