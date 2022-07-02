import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setHomeData, setLoading, getData } from './homeSlice';
import { fetchData } from 'src/utils/fetchData';
import { isEmpty } from 'lodash';

function* getSerie() {
  const characters: string = 'https://rickandmortyapi.com/api/character';
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchData, characters, 'GET');
    if (!isEmpty(data?.results)) {
      const { results } = data;
      console.log(
        '🚀 ~ file: homeSaga.ts ~ line 13 ~ function*getSerie ~ results',
        results
      );
      yield put(setHomeData(results));
      yield put(setLoading(false));
      return;
    }
    console.log('Errore da Backend');
  } catch (error) {
    console.log(error);
  }
}

export default function* rootHome() {
  yield all([takeLatest(getData.type, getSerie)]);
}
