import { all, fork } from 'redux-saga/effects';
import rootChar from 'src/Pages/Home/store/charSaga';

export default function* rootSaga() {
  yield all([fork(rootChar)]);
}
