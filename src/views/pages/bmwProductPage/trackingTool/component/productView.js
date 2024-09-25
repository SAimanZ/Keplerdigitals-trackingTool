// material-ui
import Modal from '@mui/material/Modal';
import { Card, CardContent, Grid, Typography, Box, ButtonGroup } from '@mui/material';
import TruncatedText from 'utils/TruncatedText';
import MapNFTDialog from './mapDialog';
import React from 'react';
import Avatar from 'ui-component/extended/Avatar';
import { useState } from 'react';
import logo01 from '../../../../../assets/images/logo01.png';
import canon from '../../../../../assets/images/brandlogo.png';
import { gridSpacing } from 'store/constant';
import 'react-toastify/dist/ReactToastify.css';
import { ProofsDropdown } from 'views/pages/user/productDetails/component/ProofsDropdown';
import { Stack } from '@mui/system';
import CarouselCard from './carousal';
import VComponent from './video';
import Union from '../../../../../assets/images/Union.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Uploading3d } from './Uploading3d';
import { Preview3dContainer } from './Preview3dContainer';
import moment from 'moment';
import FullImage from './fullImage';
import InfoIcon from '../../../../../assets/images/icons/Vector.svg';
import { ThreeDRotate } from 'assets';
import BLOCKCHAIN from '../../../../../constants';
// =============================|| LANDING - FEATURE PAGE ||============================= //

const Product = ({ tracker }) => {
  const displaylocation = tracker?.nft?.attributes?.find((value) => value.display_type === 'Location');

  const [mapOpen, setMapOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [defaultValue, setDefaultValue] = useState(true);
  const [slidershow, setSlidershow] = useState(false);
  const [videoshow, setVideo] = useState(false);
  const [imageIndex, setimageIndex] = useState(0);
  const [handleToggle, setHandleToggle] = useState(false);
  const [hasToShowModel, setHasToShowModel] = useState(false);
  const [hasToShowPreview, setHasToShowPreview] = useState(false);

  const Slides = () => {
    setVideo(false);
    setDefaultValue(false);
    setSlidershow(true);
  };
  const VideoAnimation = () => {
    setSlidershow(false);
    setDefaultValue(false);
    setVideo(true);
  };
  const handleClose = () => setHasToShowModel(false);

  const handleShow3D = () => {
    setHasToShowModel(true);
  };

  const handleCloseBtnClick = () => {
    setHasToShowModel(false);
    setHasToShowPreview(false);
    localStorage.removeItem('3d-hint-view');
  };

  return (
    <>
      <FullImage
        setOpen={setImageOpen}
        open={imageOpen}
        image={tracker?.nft?.secondaryImages}
        imageIndex={imageIndex}
        setimageIndex={setimageIndex}
      />
      <Modal open={hasToShowModel} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box>
          {hasToShowModel && (
            <div className="backdrop">
              <Preview3dContainer
                showModelQltyOf={'low'}
                handleCloseBtnClick={handleCloseBtnClick}
                className={hasToShowPreview ? '' : 'hide'}
                setHasToShowPreview={setHasToShowPreview}
                threedModelSrc={tracker?.nft?.threedModelSrc}
              />
              <Uploading3d className={hasToShowPreview ? 'hide' : ''} />
            </div>
          )}
        </Box>
      </Modal>
      <MapNFTDialog setOpen={setMapOpen} open={mapOpen} tracker={tracker?.nft?.attributes} />
      <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6} sm={12}>
              <Stack as="div" sx={{ position: 'relative' }}>
                {defaultValue == true && (
                  <CarouselCard image={tracker?.nft?.secondaryImages} imageIndex={imageIndex} setimageIndex={setimageIndex} />
                )}
                {slidershow == true && (
                  <CarouselCard image={tracker?.nft?.secondaryImages} imageIndex={imageIndex} setimageIndex={setimageIndex} />
                )}
                {videoshow == true && (
                  <VComponent vid={tracker?.nft?.animation_url} handleToggle={handleToggle} setHandleToggle={setHandleToggle} />
                )}
                {tracker?.nft?.threedModelSrc && !videoshow && (
                  <Box sx={{ position: 'absolute', bottom: '4%', left: '3%' }}>
                    <button
                      onClick={handleShow3D}
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex',
                        padding: '8px 15px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <img src={ThreeDRotate} alt="3d-rotate" />
                      View in 3d
                    </button>
                  </Box>
                )}

                <Box component={'div'} sx={{ position: 'absolute', top: '4%', right: '3%' }}>
                  {tracker?.nft?.animation_url && (
                    <ButtonGroup
                      sx={{ background: 'white', padding: '3px', borderRadius: '0px', height: '42px' }}
                      aria-label="outlined primary button group"
                    >
                      {slidershow == true || defaultValue == true ? (
                        <button style={{ backgroundColor: 'black', border: 'none' }} onClick={() => Slides()}>
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.33301 12.9997C4.33301 8.91417 4.33301 6.87142 5.60221 5.60221C6.87142 4.33301 8.91417 4.33301 12.9997 4.33301C17.0852 4.33301 19.1279 4.33301 20.3971 5.60221C21.6663 6.87142 21.6663 8.91417 21.6663 12.9997C21.6663 17.0852 21.6663 19.1279 20.3971 20.3971C19.1279 21.6663 17.0852 21.6663 12.9997 21.6663C8.91417 21.6663 6.87142 21.6663 5.60221 20.3971C4.33301 19.1279 4.33301 17.0852 4.33301 12.9997Z"
                              stroke="white"
                              stroke-width="1.5"
                            />
                            <circle cx="16.4667" cy="9.53338" r="1.73333" stroke="white" stroke-width="1.5" />
                            <path
                              d="M4.33301 13.4338L5.85105 12.1055C6.64082 11.4145 7.83111 11.4541 8.57316 12.1961L12.2909 15.9139C12.8865 16.5095 13.8241 16.5907 14.5132 16.1064L14.7717 15.9248C15.7633 15.2278 17.105 15.3086 18.0059 16.1194L20.7997 18.6338"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          style={{
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          onClick={() => Slides()}
                        >
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.33301 12.9997C4.33301 8.91417 4.33301 6.87142 5.60221 5.60221C6.87142 4.33301 8.91417 4.33301 12.9997 4.33301C17.0852 4.33301 19.1279 4.33301 20.3971 5.60221C21.6663 6.87142 21.6663 8.91417 21.6663 12.9997C21.6663 17.0852 21.6663 19.1279 20.3971 20.3971C19.1279 21.6663 17.0852 21.6663 12.9997 21.6663C8.91417 21.6663 6.87142 21.6663 5.60221 20.3971C4.33301 19.1279 4.33301 17.0852 4.33301 12.9997Z"
                              stroke="black"
                              stroke-width="1.5"
                            />
                            <circle cx="16.4667" cy="9.53338" r="1.73333" stroke="white" stroke-width="1.5" />
                            <path
                              d="M4.33301 13.4338L5.85105 12.1055C6.64082 11.4145 7.83111 11.4541 8.57316 12.1961L12.2909 15.9139C12.8865 16.5095 13.8241 16.5907 14.5132 16.1064L14.7717 15.9248C15.7633 15.2278 17.105 15.3086 18.0059 16.1194L20.7997 18.6338"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      )}
                      {videoshow == true ? (
                        <button style={{ backgroundColor: 'black', border: 'none' }} onClick={() => VideoAnimation()}>
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M17.333 10.8338L17.9036 10.5485C19.59 9.70525 20.4332 9.28364 21.0498 9.66469C21.6663 10.0457 21.6663 10.9885 21.6663 12.874V13.1269C21.6663 15.0124 21.6663 15.9551 21.0498 16.3362C20.4332 16.7172 19.59 16.2956 17.9036 15.4524L17.333 15.1671V10.8338Z"
                              stroke="white"
                              stroke-width="1.5"
                            />
                            <path
                              d="M14.353 9.04775C14.8607 9.55544 14.8607 10.3785 14.353 10.8862C13.8453 11.3939 13.0222 11.3939 12.5146 10.8862C12.0069 10.3785 12.0069 9.55544 12.5146 9.04775C13.0222 8.54007 13.8453 8.54007 14.353 9.04775Z"
                              stroke="white"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.33301 12.5664C4.33301 9.71725 4.33301 8.29268 5.1199 7.33384C5.26396 7.15831 5.42491 6.99736 5.60044 6.8533C6.55928 6.06641 7.98386 6.06641 10.833 6.06641C13.6822 6.06641 15.1067 6.06641 16.0656 6.8533C16.2411 6.99736 16.4021 7.15831 16.5461 7.33384C17.333 8.29268 17.333 9.71725 17.333 12.5664V13.4331C17.333 16.2822 17.333 17.7068 16.5461 18.6656C16.4021 18.8412 16.2411 19.0021 16.0656 19.1462C15.1067 19.9331 13.6822 19.9331 10.833 19.9331C7.98386 19.9331 6.55928 19.9331 5.60044 19.1462C5.42491 19.0021 5.26396 18.8412 5.1199 18.6656C4.33301 17.7068 4.33301 16.2822 4.33301 13.4331V12.5664Z"
                              stroke="white"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          style={{
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          onClick={() => VideoAnimation()}
                        >
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M17.333 10.8338L17.9036 10.5485C19.59 9.70525 20.4332 9.28364 21.0498 9.66469C21.6663 10.0457 21.6663 10.9885 21.6663 12.874V13.1269C21.6663 15.0124 21.6663 15.9551 21.0498 16.3362C20.4332 16.7172 19.59 16.2956 17.9036 15.4524L17.333 15.1671V10.8338Z"
                              stroke="black"
                              stroke-width="1.5"
                            />
                            <path
                              d="M14.353 9.04775C14.8607 9.55544 14.8607 10.3785 14.353 10.8862C13.8453 11.3939 13.0222 11.3939 12.5146 10.8862C12.0069 10.3785 12.0069 9.55544 12.5146 9.04775C13.0222 8.54007 13.8453 8.54007 14.353 9.04775Z"
                              stroke="black"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.33301 12.5664C4.33301 9.71725 4.33301 8.29268 5.1199 7.33384C5.26396 7.15831 5.42491 6.99736 5.60044 6.8533C6.55928 6.06641 7.98386 6.06641 10.833 6.06641C13.6822 6.06641 15.1067 6.06641 16.0656 6.8533C16.2411 6.99736 16.4021 7.15831 16.5461 7.33384C17.333 8.29268 17.333 9.71725 17.333 12.5664V13.4331C17.333 16.2822 17.333 17.7068 16.5461 18.6656C16.4021 18.8412 16.2411 19.0021 16.0656 19.1462C15.1067 19.9331 13.6822 19.9331 10.833 19.9331C7.98386 19.9331 6.55928 19.9331 5.60044 19.1462C5.42491 19.0021 5.26396 18.8412 5.1199 18.6656C4.33301 17.7068 4.33301 16.2822 4.33301 13.4331V12.5664Z"
                              stroke="black"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                      )}
                    </ButtonGroup>
                  )}
                  <ButtonGroup sx={{ background: 'white', marginLeft: '10px', borderRadius: 'none', height: '42px' }}>
                    <button onClick={() => setImageOpen(true)} style={{ border: 'none', backgroundColor: 'white' }}>
                      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14 13.9997L18.6667 9.33301M18.6667 9.33301H15.1667M18.6667 9.33301V12.833"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 14.0003L9.33333 18.667M9.33333 18.667H12.8333M9.33333 18.667V15.167"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66699 14.0003C4.66699 9.60055 4.66699 7.40066 6.03383 6.03383C7.40066 4.66699 9.60055 4.66699 14.0003 4.66699C18.4001 4.66699 20.6 4.66699 21.9668 6.03383C23.3337 7.40066 23.3337 9.60055 23.3337 14.0003C23.3337 18.4001 23.3337 20.6 21.9668 21.9668C20.6 23.3337 18.4001 23.3337 14.0003 23.3337C9.60055 23.3337 7.40066 23.3337 6.03383 21.9668C4.66699 20.6 4.66699 18.4001 4.66699 14.0003Z"
                          stroke="black"
                          stroke-width="1.5"
                        />
                      </svg>
                    </button>
                  </ButtonGroup>
                </Box>

                {videoshow == false && (
                  <Stack
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    as="div"
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      right: '3%',
                      bottom: { xs: '6.8%', md: '4.5%' },
                      zIndex: '999'
                    }}
                  >
                    <img src={InfoIcon} height={'20px'} width={'20px'} />
                  </Stack>
                )}
                {isShown && (
                  <Stack as="div" sx={{ position: 'absolute', right: { xs: '12%', md: '8%' }, bottom: '2%' }}>
                    <Card sx={{ minWidth: 275, width: '205px', height: '110px', backgroundColor: 'white' }}>
                      <CardContent>
                        <Box mt={-1} sx={{ display: 'flex', alignItems: 'center' }}>
                          {tracker?.nft?.secondaryImages[imageIndex]?.createdByUser && (
                            <Avatar
                              alt="User name"
                              sx={{ border: '1px solid #5498CB', width: '34px', height: '34px' }}
                              src={tracker?.nft?.secondaryImages[imageIndex]?.createdByUser?.picUrl}
                            />
                          )}
                          <Typography className="icon-text" sx={{ marginLeft: 1 }}>
                            {tracker?.nft?.secondaryImages[imageIndex]?.createdByUser?.fullName ||
                              tracker?.nft?.secondaryImages[imageIndex]?.createdBy}
                          </Typography>
                        </Box>
                        <Typography mt={1.5} className="image-changed" variant="body2">
                          Image Changed
                        </Typography>
                        <Typography mt={0.5} className="date-time-on-hover" variant="body2">
                          {moment(tracker?.nft?.secondaryImages[imageIndex]?.createdAt).format('ddd DD MMM YYYY [at] h:mmA')}
                        </Typography>
                        <ArrowRightIcon style={{ color: 'white', position: 'absolute', right: '-8%', bottom: '2%', fontSize: '42px' }} />
                      </CardContent>
                    </Card>
                  </Stack>
                )}
              </Stack>
            </Grid>

            <Grid item md={6} sm={12} sx={{ paddingLeft: { xs: '24px !important', md: '24px !important' } }}>
              <Grid item md={12} sm={12}>
                <Grid container spacing={2}>
                  <Grid ml={2} item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Avatar
                          alt="User 1"
                          src={tracker?.nft?.brandPicUrl || canon}
                          sx={{
                            border: '1px solid #5498CB',
                            width: { xs: '38.692px', md: '48.692px' },
                            height: { xs: '38.692px', md: '48.692px' },
                            background: '#ede9e9'
                          }}
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth sx={{ textDecoration: 'none' }}>
                        <Typography align="left" className="BrandCustom">
                          {tracker?.nft?.brandName ? tracker?.nft?.brandName : 'RC Allen Instruments'}
                        </Typography>
                        <Typography align="left" className="creator-custom">
                          {tracker?.nft?.categoryName}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography align="left" className="Lux-custom" color="black">
                      {tracker?.nft?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="productBMW">
                    {/*  <Typography className="productBMW" variant="body2">
                        {tracking?.nft?.description ? tracking?.nft?.description : 'NFT'}
                      </Typography> */}
                    {tracker?.nft?.description && <TruncatedText text={tracker?.nft?.description} limit={380} />}
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex' }} mt={2}>
                    <Grid item xs={12} md={6}>
                      <Typography className="owner-title" color="#8b8585">
                        Current Owner
                      </Typography>
                      <Grid item xs={12} md={12} sx={{ display: 'flex', ml: tracker?.nft?.currentOwnerUser ? 2 : 1 }}>
                        {tracker?.nft?.currentOwnerUser && (
                          <Avatar
                            alt="User 1"
                            src={tracker?.nft?.currentOwnerUser.picUrl}
                            sx={{
                              border: '1px solid #5498CB',
                              width: { xs: '30px', md: '34px' },
                              height: { xs: '30px', md: '34px' },
                              objectFit: 'fill'
                            }}
                          />
                        )}
                        <Typography align="left" sx={{ display: { xs: 'none', md: 'block' }, ml: { xs: 1, md: 1 } }} className="owner-name">
                          {tracker?.nft?.currentOwnerUser ? tracker?.nft?.currentOwnerUser?.fullName : ''}
                        </Typography>
                        <Typography align="left" sx={{ display: { md: 'none' }, ml: { xs: 1, md: 1 } }} className="owner-name">
                          {tracker?.nft?.currentOwnerUser ? tracker?.nft?.currentOwnerUser?.fullName : ''}
                        </Typography>
                        <Typography
                          sx={{ ml: { md: 1 }, display: 'flex', textAlign: 'center', alignItems: 'center', cursor: 'pointer' }}
                          onClick={() => {
                            window.open(`${BLOCKCHAIN.BLOCK_EXPLORER_URL}/address/${tracker?.nft?.currentOwner}`, '_blank');
                          }}
                        >
                          <svg width="25" height="25" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </Grid>
                    <Grid item md={0.5}></Grid>
                    {/*
                    <Grid
                      onClick={() => setMapOpen(true)}
                      item
                      xs={4}
                      md={4}
                      lg={3}
                      sx={{
                        display: 'flex',
                        background: '#C7C7C7',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: { md: '55px', xs: '44px' },
                        cursor: 'pointer',
                        mt: '10px'
                      }}
                    >
                      <Typography>
                         <LocationOnIcon
                              sx={{ color: '#4A4848', fontSize: '24px', cursor: 'pointer' }}
                              onClick={() => setMapOpen(true)}
                            /> 
                        <svg
                          onClick={() => setMapOpen(true)}
                          sx={{ width: { xs: '14.157px', md: '18.49' }, height: { xs: '16.35px', md: '21.354' } }}
                          width="18.49"
                          height="21.354"
                          viewBox="0 0 19 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.2291 7.62498C17.1354 2.81248 12.9375 0.645813 9.24998 0.645813C9.24998 0.645813 9.24998 0.645813 9.23956 0.645813C5.56248 0.645813 1.35414 2.80206 0.260394 7.61456C-0.958356 12.9896 2.33331 17.5416 5.31248 20.4062C6.41664 21.4687 7.83331 22 9.24998 22C10.6666 22 12.0833 21.4687 13.1771 20.4062C16.1562 17.5416 19.4479 13 18.2291 7.62498ZM9.24998 12.8437C7.43748 12.8437 5.96873 11.375 5.96873 9.56248C5.96873 7.74998 7.43748 6.28123 9.24998 6.28123C11.0625 6.28123 12.5312 7.74998 12.5312 9.56248C12.5312 11.375 11.0625 12.8437 9.24998 12.8437Z"
                            fill="#252222"
                          />
                        </svg>
                      </Typography>
                      <Tooltip sx={{}} placement="top" title={displaylocation?.trait_type}>
                        <Typography className="view-map" color="#8b8585">
                          {displaylocation?.trait_type?.slice(0, 15)}
                        </Typography>
                      </Tooltip>
                    </Grid>
                    */}
                  </Grid>

                  <Grid item xs={12} mb={5}>
                    <Box sx={{ borderRadius: '4px', width: '100%' }}>
                      {tracker?.nft?.poa && <ProofsDropdown proofs={tracker?.nft?.poa} />}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1} sm={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
