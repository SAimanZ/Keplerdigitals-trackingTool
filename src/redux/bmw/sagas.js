import axios from '../../utils/axios';
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { NFT_TRACK, ALL_BMW_PRODUCTS } from './constants';

import { nftTrackSuccess, allProductsSuccess, setLoader } from './actions';
import { makeSelectAuthToken } from 'store/Selector';

import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';
import { setNotification } from '../../shared/helperMethods/setNotification';

function* NFTtrack({ payload }) {
  yield put(setLoader(true));

  try {
    let data = {
      serialId: payload.serialId
    };
    const response = yield axios.post(`/bmw/trackNFT`, data);

    yield put(nftTrackSuccess(response.data.data));
    yield put(setLoader(false));
  } catch (error) {
    yield sagaErrorHandler(error.response.data.data);
    yield put(setLoader(false));
  }
}
export function* watchTrackProducts() {
  yield takeLatest(NFT_TRACK, NFTtrack);
}
function* allProductsbmw({}) {
  try {
    const response = yield axios.get(`/bmw/getNFTs`);
    yield put(allProductsSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response.data.data);
  }
}

export function* watchProducts() {
  yield takeLatest(ALL_BMW_PRODUCTS, allProductsbmw);
}

export default function* productsSaga() {
  yield all([fork(watchTrackProducts), fork(watchProducts)]);
}
