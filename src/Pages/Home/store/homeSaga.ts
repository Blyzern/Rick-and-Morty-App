import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchData } from 'src/utils/fetchData';
import { isEmpty } from 'lodash';
import { setHomeData, setLoading, getData } from './homeSlice';

type props = {
  data: { info: {}; results: [] };
};

function* getSerie() {
  const characters: string = 'https://rickandmortyapi.com/api/character';
  try {
    yield put(setLoading(true));
    const { data }: props = yield call(fetchData, characters, 'GET');
    if (!isEmpty(data?.results)) {
      const { results } = data;
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
