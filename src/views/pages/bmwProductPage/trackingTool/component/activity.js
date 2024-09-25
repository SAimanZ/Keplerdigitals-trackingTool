import * as React from 'react';
import { gridSpacing } from 'store/constant';
import moment from 'moment';
import Avatar from 'ui-component/extended/Avatar';
import { activityIcons } from './list';
import '@fontsource/public-sans';
import transferlogo from '../../../../../assets/images/logo2.png';
import { Typography, Grid, Select, FormControl, MenuItem, Divider } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import BLOCKCHAIN from '../../../../../constants';

const Activity = ({ tracking, nft }) => {
  const [personName, setPersonName] = React.useState('Show All');
  const names = [
    {
      label: 'Show All',
      value: 'Show All'
    },

    {
      label: 'Mint',
      value: 'Mint'
    },

    {
      label: 'Transfer',
      value: 'Transfer'
    }
  ];
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const selectedValue = tracking?.find((value) => value?.event == personName);

  return (
    <>
      <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
        <Grid item xs={12} lg={12} md={12}>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Typography
                color="black"
                className="productfigmastyl"
                mt={1}
                component="div"
                sx={{ textAlign: { xs: 'center', md: 'center', sm: 'center' }, textTransform: 'capitalize' }}
              >
                Ownership Activity
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item md={12} sm={12}>
            <MainCard
              className="tableBorder"
              sx={{ background: '#F4F4F4' }}
              title={
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ display: 'flex' }}>
                    <Typography variant="h3" className="filter-text" sx={{ marginRight: '18px !important' }}>
                      Filter by:
                    </Typography>
                    <div>
                      <FormControl
                        className="filter-select"
                        sx={{
                          background: 'transparent',
                          color: '#000 !important',
                          fontWeight: '500',
                          // border: '4px solid red',
                          borderRadius: '0px'
                        }}
                      >
                        <Select
                          sx={{
                            color: '#4B4949',
                            fontWeight: '500',
                            '& .MuiSelect-icon': {
                              right: '5px', // Adjust the right position of the icon
                              top: '40%'
                            }
                          }}
                          variant="standard"
                          displayEmpty
                          value={personName}
                          onChange={handleChange}
                          disableUnderline={true}
                          inputProps={{ 'aria-label': 'Without label' }}
                          IconComponent={CustomSelectIcon}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                marginTop: '15px',
                                background: '#fff',
                                borderRadius: '0px',
                                width: '165px !important',
                                height: '42px !important'
                              }
                            }
                          }}
                        >
                          {names.map((name) => (
                            <MenuItem
                              sx={{
                                color: '#4B4949 !important',
                                fontFamily: 'Ubuntu !important',
                                fontSize: '14px !important',
                                fontStyle: 'normal !important',
                                fontWeight: '500 !important',
                                textTransform: 'capitalize !important',
                                width: '165px'
                              }}
                              key={name.label}
                              value={name?.value}
                              // style={getStyles(name, personName, theme)}
                            >
                              {name.value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              }
              content={false}
            >
              <Divider />
              <TableContainer sx={{ p: 4 }}>
                {tracking?.length == 0 ? (
                  <TableBody>
                    <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                      No activity found!
                    </TableCell>
                  </TableBody>
                ) : (
                  <Table>
                    <TableHead sx={{ background: '#fff', display: personName != 'Show All' && !selectedValue ? 'none' : 'inlineblock' }}>
                      <TableRow>
                        <TableCell className="activityTable" sx={{ paddingLeft: '40px' }} align="left">
                          Event
                        </TableCell>
                        {/*   <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                                                Brand Name{' '}
                                            </TableCell> */}
                        <TableCell className="activityTable" sx={{}} align="center">
                          Price
                        </TableCell>
                        <TableCell className="activityTable" sx={{}} align="center">
                          From
                        </TableCell>

                        <TableCell className="activityTable" sx={{}} align="center">
                          To
                        </TableCell>
                        <TableCell className="activityTable" sx={{}} align="center">
                          Date
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {tracking?.map((item) => (
                      <TableBody>
                        {personName == item.event && (
                          <TableRow>
                            {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                              <TableCell
                                className="activityTable"
                                sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                align="left"
                              >
                                <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                  <Avatar alt="User 1" sx={{ width: 32, height: 32, objectFit: 'fill' }}>
                                    {activityIcons.transfer}
                                  </Avatar>

                                  <Typography align="left" ml={1} variant="h3" className="activity-update">
                                    {item.event}
                                  </Typography>
                                  <Typography
                                    onClick={() => {
                                      window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/tx/${item?.transactionHash}`, '_blank');
                                    }}
                                    align="left"
                                    variant="h3"
                                    className="activity-update"
                                  >
                                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                        stroke="#0066B1"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                        stroke="#0066B1"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                    </svg>
                                  </Typography>
                                </Grid>
                              </TableCell>
                            ) : (
                              item?.event == 'Mint' && (
                                <TableCell
                                  className="activityTable"
                                  sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                  align="left"
                                >
                                  <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                    <Avatar alt="User 1" sx={{ width: 32, height: 32, objectFit: 'fill' }}>
                                      {activityIcons?.mint}
                                    </Avatar>

                                    <Typography align="left" ml={1} variant="h3" className="activity-update">
                                      {item.event}
                                    </Typography>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/tx/${item?.transactionHash}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </Grid>
                                </TableCell>
                              )
                            )}

                            <TableCell className="activityTable" sx={{ fontSize: '15px', whiteSpace: 'nowrap' }} align="center">
                              {item?.priceObj?.price} {item?.priceObj?.currencySymbol}
                            </TableCell>

                            <TableCell
                              className="activityTable"
                              sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                              align="center"
                              // onClick={() => {
                              //   window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.from ? item?.from : item?.minter}`, '_blank');
                              // }}
                            >
                              <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.fromUser?.picUrl ? item?.fromUser?.picUrl : transferlogo}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                ) : (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.minterUser?.picUrl ? item?.minterUser?.picUrl : transferlogo}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                )}
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <>
                                    <Tooltip placement="top" title={item?.fromUser ? item?.fromUser?.fullName : item?.fromUser}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.fromUser?.fullName ? item?.fromUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.from}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <Tooltip placement="top" title={item?.minterUser ? item?.minterUser?.fullName : item?.minter}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.minterUser?.fullName ? item?.minterUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.minter}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                )}
                              </Grid>
                            </TableCell>
                            <TableCell
                              className="activityTable"
                              sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                              align="center"
                              onClick={() => {
                                window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.to ? item?.to : item?.seller}`, '_blank');
                              }}
                            >
                              <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.toUser?.picUrl ? item?.toUser?.picUrl : 's'}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                ) : (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.sellerUser?.picUrl ? item?.sellerUser?.picUrl : 's'}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                )}
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <>
                                    <Tooltip placement="top" title={item?.toUser?.fullName ? item?.toUser?.fullName : ''}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.toUser?.fullName ? item?.toUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.to}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <Tooltip placement="top" title={item?.sellerUser ? item?.sellerUser?.fullName : item?.seller}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.sellerUser?.fullName ? item?.sellerUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.seller}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                )}
                              </Grid>
                            </TableCell>
                            <Tooltip placement="top" title={moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}>
                              <TableCell
                                className="activityTable date-width"
                                sx={{ display: { xs: 'block', md: 'none' }, fontSize: '15px', whiteSpace: 'nowrap' }}
                                align="center"
                              >
                                {moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}
                              </TableCell>
                            </Tooltip>
                            <Tooltip placement="top" title={moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}>
                              <TableCell
                                className="activityTable"
                                sx={{ display: { xs: 'none', md: 'block' }, fontSize: '15px', whiteSpace: 'nowrap' }}
                                align="center"
                              >
                                {moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}
                              </TableCell>
                            </Tooltip>
                          </TableRow>
                        )}
                        {personName == 'Show All' && (
                          <TableRow>
                            {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                              <TableCell
                                className="activityTable"
                                sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                align="left"
                              >
                                <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                  <Avatar alt="User 1" sx={{ width: 32, height: 32, objectFit: 'fill' }}>
                                    {activityIcons.transfer}
                                  </Avatar>

                                  <Typography align="left" ml={1} variant="h3" className="activity-update">
                                    {item.event}
                                  </Typography>
                                  <Typography
                                    onClick={() => {
                                      window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/tx/${item?.transactionHash}`, '_blank');
                                    }}
                                    align="left"
                                    variant="h3"
                                    className="activity-update"
                                  >
                                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                        stroke="#0066B1"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                        stroke="#0066B1"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                    </svg>
                                  </Typography>
                                </Grid>
                              </TableCell>
                            ) : (
                              item?.event == 'Mint' && (
                                <TableCell
                                  className="activityTable"
                                  sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                  align="left"
                                >
                                  <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                    <Avatar alt="User 1" sx={{ width: 32, height: 32, objectFit: 'fill' }}>
                                      {activityIcons?.mint}
                                    </Avatar>

                                    <Typography align="left" ml={1} variant="h3" className="activity-update">
                                      {item.event}
                                    </Typography>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/tx/${item?.transactionHash}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </Grid>
                                </TableCell>
                              )
                            )}

                            <TableCell className="activityTable" sx={{ fontSize: '15px', whiteSpace: 'nowrap' }} align="center">
                              {item?.priceObj?.price} {item?.priceObj?.currencySymbol}
                            </TableCell>

                            <TableCell
                              className="activityTable"
                              sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                              align="center"
                            >
                              <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.fromUser?.picUrl ? item?.fromUser?.picUrl : transferlogo}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                ) : (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.minterUser?.picUrl ? item?.minterUser?.picUrl : transferlogo}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                )}
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <>
                                    <Tooltip placement="top" title={item?.fromUser ? item?.fromUser?.fullName : item?.fromUser}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.fromUser?.fullName ? item?.fromUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.from}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <Tooltip placement="top" title={item?.minterUser ? item?.minterUser?.fullName : item?.minter}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.minterUser?.fullName ? item?.minterUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.minter}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                )}
                              </Grid>
                            </TableCell>
                            <TableCell
                              className="activityTable"
                              sx={{ fontSize: '15px', color: '#2194FF', cursor: 'pointer', whiteSpace: 'nowrap' }}
                              align="center"
                            >
                              <Grid item ml={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.toUser?.picUrl ? item?.toUser?.picUrl : 's'}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                ) : (
                                  <Avatar
                                    alt="User 1"
                                    src={item?.sellerUser?.picUrl ? item?.sellerUser?.picUrl : 's'}
                                    sx={{ border: '1px solid #5498CB', width: 32, height: 32, objectFit: 'fill' }}
                                  />
                                )}
                                {item.event == 'Transfer' || item.event == 'Transfer Multiple' ? (
                                  <>
                                    <Tooltip placement="top" title={item?.toUser?.fullName ? item?.toUser?.fullName : ''}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.toUser?.fullName ? item?.toUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.to}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <Tooltip placement="top" title={item?.sellerUser ? item?.sellerUser?.fullName : item?.seller}>
                                      <Typography align="left" ml={1} variant="h3" className="activity-update">
                                        {item?.sellerUser?.fullName ? item?.sellerUser?.fullName?.split(' ')[0] : ''}
                                      </Typography>
                                    </Tooltip>
                                    <Typography
                                      onClick={() => {
                                        window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${item?.seller}`, '_blank');
                                      }}
                                      align="left"
                                      variant="h3"
                                      className="activity-update"
                                    >
                                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M13.3333 12.1667L20.8333 4.66669M20.8333 4.66669H16.3801M20.8333 4.66669V9.11981"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M20.8334 13C20.8334 16.9284 20.8334 18.8926 19.613 20.113C18.3926 21.3334 16.4285 21.3334 12.5001 21.3334C8.57171 21.3334 6.60753 21.3334 5.38714 20.113C4.16675 18.8926 4.16675 16.9284 4.16675 13C4.16675 9.07165 4.16675 7.10746 5.38714 5.88708C6.60753 4.66669 8.57171 4.66669 12.5001 4.66669"
                                          stroke="#0066B1"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                        />
                                      </svg>
                                    </Typography>
                                  </>
                                )}
                              </Grid>
                            </TableCell>
                            <Tooltip placement="top" title={moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}>
                              <TableCell
                                className="activityTable date-width"
                                sx={{ display: { xs: 'block', md: 'none' }, fontSize: '15px', whiteSpace: 'nowrap' }}
                                align="center"
                              >
                                {moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}
                              </TableCell>
                            </Tooltip>
                            <Tooltip placement="top" title={moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}>
                              <TableCell
                                className="activityTable"
                                sx={{ display: { xs: 'none', md: 'block' }, fontSize: '15px', whiteSpace: 'nowrap' }}
                                align="center"
                              >
                                {moment.unix(item?.blockTimestamp).format('ddd MMM DD YYYY')}
                              </TableCell>
                            </Tooltip>
                          </TableRow>
                        )}
                      </TableBody>
                    ))}
                    {/*  {tracking != undefined && (
                      <TableRow>
                        <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                          <Grid item xs={12}>
                            {activityIcons?.searchIcon}
                          </Grid>
                          <span> No NFTs items found</span>
                        </TableCell>
                      </TableRow>
                    )}
                     </>
                                    ))} */}
                  </Table>
                )}
                {/*      <Pagination
                                count={Math.ceil(currentCards.length / cardsPerPage)}
                                onChange={(event, value) => setCurrentPage(value)}
                                page={currentPage}
                              /> */}
              </TableContainer>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const CustomSelectIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none" {...props}>
      <path d="M1 1.24023L4.53 4.76023L8.06 1.24023" stroke="#4B4949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Activity;
