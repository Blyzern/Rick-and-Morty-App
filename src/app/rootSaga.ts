import { all, fork } from 'redux-saga/effects';
import rootHome from 'src/Pages/Home/store/homeSaga';

export default function* rootSaga() {
  yield all([fork(rootHome)]);
}
