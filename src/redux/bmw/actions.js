import { NFT_TRACK, ALL_BMW_PRODUCTS_SUCCESS, ALL_BMW_PRODUCTS, NFT_TRACK_SUCCESS, SET_LOADER } from './constants';

export const allProducts = (data) => {
  return {
    type: ALL_BMW_PRODUCTS,
    payload: data
  };
};

export const allProductsSuccess = (data) => {
  return {
    type: ALL_BMW_PRODUCTS_SUCCESS,
    payload: data
  };
};

export const nftTrack = (data) => {
  return {
    type: NFT_TRACK,
    payload: data
  };
};
export const nftTrackSuccess = (data) => {
  return {
    type: NFT_TRACK_SUCCESS,
    payload: data
  };
};
export const setLoader = (data) => {
  return {
    type: SET_LOADER,
    payload: data
  };
};
