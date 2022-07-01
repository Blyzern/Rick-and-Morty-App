import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setHomeData, setPages, setLoading, getData } from './homeSlice';
import { fetchData } from 'src/utils/fetchData';

function* getSerie() {
  const characters = 'https://rickandmortyapi.com/api/character';
  try {
    yield put(setLoading(true));
    const { results } = yield call(fetchData, characters, 'GET');
    console.log(
      '🚀 ~ file: homeSaga.ts ~ line 10 ~ function*getSerie ~ results',
      results
    );
    yield put(setHomeData(results));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootHome() {
  yield all([takeLatest(getData.type, getSerie)]);
}
