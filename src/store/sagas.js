import { all } from 'redux-saga/effects';
import bmwSaga from 'redux/bmw/sagas';
export default function* rootSaga() {
  yield all([
    bmwSaga()
  ]);
}
