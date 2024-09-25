import produce from 'immer';
import { ALL_BMW_PRODUCTS_SUCCESS, NFT_TRACK_SUCCESS, SET_LOADER } from './constants';

const INITIAL_STATE = {
  bmwUser: null,
  tracker: null,
  loader: false
};

const BmwReducer = produce((draft, action) => {
  switch (action.type) {
    case ALL_BMW_PRODUCTS_SUCCESS:
      draft.bmwUser = action.payload;
      break;
    case NFT_TRACK_SUCCESS:
      draft.tracker = action.payload;
      break;
    case SET_LOADER:
      draft.loader = action.payload;
      break;
    default:
  }
}, INITIAL_STATE);

export default BmwReducer;
