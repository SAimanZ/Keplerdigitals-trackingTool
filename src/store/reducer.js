import { combineReducers } from 'redux';
import customizationReducer from './themeReducers/customizationReducer';
import snackbarReducer from './themeReducers/snackbarReducer';
import BmwReducer from 'redux/bmw/reducers';

const rootReducer = combineReducers({
  customization: customizationReducer,
  snackbar: snackbarReducer,
  BmwReducer: BmwReducer
});

export default rootReducer;
