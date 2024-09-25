import PropTypes from 'prop-types';
import { useState } from 'react';
import '@fontsource/public-sans';
// material-ui
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Card, CardContent, Tooltip } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import DocLight from './docLight';
import Avatar from 'ui-component/extended/Avatar';
import leftImage from '../../../../../assets/images/icons/left-icon.svg';
import rightImage from '../../../../../assets/images/icons/right.svg';
import logo01 from '../../../../../assets/images/logo01.png';
import { activityIcons } from './list';
// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectDocument from './selectDocument';
import { Stack } from '@mui/system';
import moment from 'moment';
// ==============================|| ACCORDION ||============================== //

const attributeSmallScreen = ({ tracking, data, createdBy, createdByUser, createdAt }) => {
  const [expanded, setExpanded] = useState(true);
  const handleChange = (_, newExpanded) => {
    setExpanded(newExpanded);
  };

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState(false);
  const [items, setItems] = useState();
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filterFirstSerial = [];

  tracking.filter((d) => filterFirstSerial.push(d));
  const currentCards = filterFirstSerial?.slice(indexOfFirstCard, indexOfLastCard);
  const count = Math.ceil(tracking.length / 6);
  const pages = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <>
      <SelectDocument open={value} setOpen={setValue} items={items} setItems={setItems} />
      <Box sx={{ width: '100%' }}>
        {data &&
          data.map((item) => (
            <MuiAccordion
              sx={{ background: '#F4F4F4' }}
              m={3}
              key={item.id}
              defaultExpanded={!item.disabled && item.defaultExpand}
              expanded={expanded}
              // expanded={(!toggle && !item.disabled && item.expanded) || (toggle && expanded === item.id)}
              disabled={item.disabled}
              onChange={handleChange}
            >
              <MuiAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#000' }} />}>
                <span className="attribute-title"> {item.title}</span>
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
                    //   pl: 1.5,
                    pb: { xs: 3, md: 1 },
                    background: '#F4F4F4'
                  }}
                >
                  <Grid item xs={6} sx={{ padding: '8px 0 0 0', float: 'left' }}>
                    <Grid item xs={12}>
                      <Typography variant="body" className="date-logo-name-bar">
                        Date:
                      </Typography>
                    </Grid>
                    <Grid mt={0.6} item xs={12}>
                      <Box variant="span" className="date-logo">
                        {createdAt && moment.unix(createdAt).format('ddd MMM DD YYYY')}
                        {/* {Date(tracking?.nft?.createdAt).slice(0, 15)} */}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} sx={{ borderLeft: '2px solid lightgray', height: '33px', marginTop: '22px' }}></Grid>
                  <Grid item xs={5} sx={{ padding: '8px 0 0 0', float: 'right' }}>
                    <Grid item xs={12} ml={3}>
                      <Typography variant="body" className="date-logo-name-bar" sx={{ float: { md: 'right' } }}>
                        Created by:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} ml={3} sx={{ display: 'flex' }}>
                      {createdByUser && (
                        <Avatar
                          alt="User 1"
                          src={createdByUser.picUrl}
                          sx={{ border: '1px solid #5498CB', width: 25, height: 25, objectFit: 'fill' }}
                        />
                      )}
                      <Tooltip placement="top" title={createdByUser?.fullName ? createdByUser?.fullName : ''}>
                        <Typography align="left" ml={1} variant="body" className="attribute-update">
                          {createdByUser?.fullName ? createdByUser?.fullName : ''}
                        </Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    pb: { xs: 3, md: 0 },
                    background: '#F4F4F4',
                    //   display: 'flex',
                    height: '140px',
                    maxWidth: '98% !important',
                    margin: '0 auto'
                  }}
                >
                  <Grid container justifyContent="left" spacing={2} sx={{ textAlign: 'center', mb: 5 }}>
                    {currentCards?.map(
                      (item, index) =>
                        item?.trait_type && (
                          <Grid key={index} item xs={4} md={2}>
                            <Card
                              onClick={() => {
                                setValue(true), setItems(item);
                              }}
                              //   className="card-style"
                              sx={{
                                borderRadius: '0px !important',
                                maxWidth: '300px', // Set maximum width
                                maxHeight: '50px', // Set maximum height
                                minWidth: '70px', // Set minimum width
                                minHeight: '50px', // Set minimum height
                                background: item?.trait_type === 'Serial ID' ? '#0066B1' : null
                                // border: '1px solid #2F53FF',
                                // background:
                                //   theme.palette.mode === 'dark'
                                //     ? item?.trait_type === 'Serial ID' && 'linear-gradient(to top right, #2F53FF ,#2FC1FF)'
                                //     : '#fff'
                              }}
                            >
                              <CardContent sx={{ padding: '10px !important' }}>
                                <Tooltip placement="top" title={item?.trait_type}>
                                  <Typography
                                    className={item?.trait_type === 'Serial ID' ? 'Engine-deafult' : 'Engine'}
                                    variant="h3"
                                    sx={{ color: null }}
                                  >
                                    {item?.trait_type ? item?.trait_type?.slice(0, 7) : '0'}
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
                                      : item?.value?.length > 11
                                      ? item.value.slice(0, 11) + '..'
                                      : item?.value}
                                  </Typography>
                                </Tooltip>
                              </CardContent>
                            </Card>
                          </Grid>
                        )
                    )}
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '15px' }}>
                  <Box variant="div" className="pagination-num" onClick={() => setCurrentPage((old) => Math.max(1, old - 1))}>
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

                  <Box variant="div" className="pagination-num" onClick={() => setCurrentPage((old) => Math.min(count, old + 1))}>
                    {currentPage == count ? activityIcons.righticon : activityIcons.righticonActive}
                  </Box>
                </Grid>
              </MuiAccordionDetails>
            </MuiAccordion>
          ))}
      </Box>
    </>
  );
};

attributeSmallScreen.propTypes = {
  data: PropTypes.array,
  defaultExpandedId: PropTypes.string,
  expandIcon: PropTypes.object,
  square: PropTypes.bool,
  toggle: PropTypes.bool
};

export default attributeSmallScreen;
