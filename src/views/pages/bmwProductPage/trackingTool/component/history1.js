import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '@fontsource/public-sans';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { MenuItem, Menu, Card, CardContent, Tooltip } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@mui/material';
import Avatar from 'ui-component/extended/Avatar';
import { useLocation } from 'react-router-dom';

// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Doc from './doc';
import DocLight from './docLight';
import SelectDocument from './selectDocument';
import histroyDropdown from '../../../../../assets/images/icons/histroyIcon.svg';
import { Stack } from '@mui/system';
import moment from 'moment';
import { activityIcons } from './list';
// ==============================|| ACCORDION ||============================== //

const history1 = ({
  data,
  defaultExpandedId = null,
  expandIcon,
  square,
  toggle,
  tracking,
  blockTimestamp,
  history,
  updater,
  Proof,
  updaterUser
}) => {
  const theme = useTheme();
  let location = useLocation();

  const [propertiesOpen, setPropertiesOpen] = useState(false);

  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    if (toggle) setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(defaultExpandedId);
  }, [defaultExpandedId]);
  // const cardData = tracking && tracking?.historyArray && tracking?.historyArray[0]?.historyArray;
  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filterFirstSerial = [];
  const reason = {
    1: ' GEN01-GEN09 Details',
    2: '10 days ',
    3: ' 5 days '
  };
  tracking.filter((d) => filterFirstSerial.push(d));
  const currentCards = filterFirstSerial?.slice(indexOfFirstCard, indexOfLastCard);
  // pagination functionality
  // const [currentPage, setCurrentPage] = useState(1);
  // const count = 5;
  const count = Math.ceil(tracking.length / 12);
  // console.log(count, 'tracking tool');
  // replace this with your actual count

  const pages = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <>
      <SelectDocument setOpen={setPropertiesOpen} open={propertiesOpen} Proof={Proof} />
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
                <span className="history-title">History {history}</span>
                {location.pathname.includes('KPLRAB1') && <span className="history-update-reason"> {reason[history]}</span>}
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
                  <Grid item xs={3} sx={{ padding: '8px 0' }}>
                    <Typography variant="body" className="date-logo-name-bar">
                      Date:
                      <Box variant="span" className="date-logo" ml={3}>
                        {blockTimestamp && moment.unix(blockTimestamp).format('ddd MMM DD YYYY')}
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sx={{ borderLeft: '2px solid lightgray', height: '26px', marginTop: '13px' }}></Grid>
                  <Grid item xs={8} sx={{ display: 'flex', padding: '8px 0' }}>
                    <Grid item xs={2}>
                      <Typography variant="body" className="date-logo-name-bar" sx={{ float: { md: 'right' } }}>
                        Created by:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex' }}>
                      {updaterUser && (
                        <Avatar
                          alt="User 1"
                          src={updaterUser.picUrl}
                          sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                        />
                      )}
                      <Typography align="left" ml={1} variant="body" className="attribute-update">
                        {updaterUser ? updaterUser.fullName : updater.slice(0, 5) + '...' + updater.slice(38, 42)}
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
                    maxWidth: '98% !important',
                    margin: '0 auto',

                    maxHeight: { md: '300px' }
                  }}
                >
                  <Grid container justifyContent="left" spacing={2} sx={{ textAlign: 'center', mb: 5 }}>
                    {currentCards?.map(
                      (card, index) =>
                        card?.trait_type && (
                          <>
                            <Grid item xs={12} md={2}>
                              <Card
                                className="card-style"
                                sx={{
                                  // border: '2px solid #2F53FF',
                                  // background: '#0066B1'
                                  background: card?.trait_type === 'Serial ID' ? '#0066B1' : null
                                }}
                              >
                                <CardContent sx={{ paddingTop: '16px' }}>
                                  <Tooltip sx={{}} placement="top" title={card?.trait_type}>
                                    <p className={card?.trait_type === 'Serial ID' ? 'Engine-deafult' : 'Engine'}>
                                      {card?.trait_type?.slice(0, 7)}
                                    </p>
                                  </Tooltip>
                                  <Tooltip
                                    sx={{}}
                                    placement="bottom"
                                    title={
                                      card?.display_type == 'Date' && moment(card?.value).format('ddd MMM DD YYYY') !== 'Invalid Date'
                                        ? moment(card?.value).format('ddd MMM DD YYYY')
                                        : card?.value
                                    }
                                  >
                                    <Typography
                                      variant="h6"
                                      className={card?.trait_type === 'Serial ID' ? 'centerText-default' : 'centerText'}
                                      sx={{ color: 'black', cursor: 'pointer' }}
                                    >
                                      {card?.display_type == 'Date' && moment(card?.value).format('ddd MMM DD YYYY') !== 'Invalid Date'
                                        ? moment(card?.value).format('ddd MMM DD YYYY')
                                        : card?.value?.length > 15
                                        ? card.value.slice(0, 15) + '..'
                                        : card?.value}
                                    </Typography>
                                  </Tooltip>

                                  {card?.proof && (
                                    <Grid item xs={12} className="document" sx={{ m: 1 }}>
                                      <Box
                                        onClick={() => {
                                          window.open(card?.proof);
                                        }}
                                      >
                                        <DocLight />
                                      </Box>
                                    </Grid>
                                  )}
                                </CardContent>
                              </Card>
                            </Grid>
                          </>
                        )
                    )}
                  </Grid>
                </Grid>
                {/* <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                  {tracking?.length > 6 && (
                    <Pagination
                      count={Math.ceil(tracking.length / cardsPerPage)}
                      onChange={(event, value) => setCurrentPage(value)}
                      page={currentPage}
                      shape="rounded"
                      variant="outlined"
                      sx={{
                        '.MuiPaginationItem-page.Mui-selected': {
                          backgroundColor: '#000',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: '#000',
                            opacity: 0.8
                          }
                        }
                      }}
                    />
                  )}
                </Grid> */}
                {/*   <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Box variant="div" className="pagination-num">
                    <img src={leftImage} alt="left-side" />
                  </Box>
                  <Box variant="div" className="pagination-num-active">
                    01
                  </Box>
                  <Box variant="div" className="pagination-num">
                    02
                  </Box>
                  <Box variant="div" className="pagination-num">
                    03
                  </Box>
                  <Box variant="div" className="pagination-num">
                    04
                  </Box>
                  <Box variant="div" className="pagination-num">
                    05
                  </Box>

                  <Box variant="div" className="pagination-num">
                    <img src={rightImage} alt="left-side" />
                  </Box>
                  {tracking?.length > 6 && (
                  <Pagination
                    count={Math.ceil(tracking.length / cardsPerPage)}
                    onChange={(event, value) => setCurrentPage(value)}
                    page={currentPage}
                    shape="rounded"
                    variant="outlined"
                    sx={{
                      '.MuiPaginationItem-page.Mui-selected': {
                        backgroundColor: '#000',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#000',
                          opacity: 0.8
                        }
                      }
                    }}
                  />
                )} */}

                <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Box variant="div" className="pagination-button" onClick={() => setCurrentPage((old) => Math.max(1, old - 1))}>
                    {currentPage == '1' ? activityIcons.lefticon : activityIcons.lefticonActive}
                  </Box>

                  {pages.map((num, index) => (
                    <Box
                      sx={{ cursor: 'pointer' }}
                      key={index}
                      variant="div"
                      className={num === currentPage ? 'pagination-num-active' : 'pagination-num'}
                      onClick={() => setCurrentPage(num)}
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
    </>
  );
};

history1.propTypes = {
  data: PropTypes.array,
  defaultExpandedId: PropTypes.string,
  expandIcon: PropTypes.object,
  square: PropTypes.bool,
  toggle: PropTypes.bool
};

export default history1;
