import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchData } from 'src/utils/fetchData';
import { isEmpty } from 'lodash';
import { CharDataTypes } from './charSlice.interface';
import { setCharData, setLoading, getData } from './charSlice';

type props = {
  data: { info: {}; results: [CharDataTypes] };
};

function* getCharacters() {
  const characters: string = 'https://rickandmortyapi.com/api/character';
  try {
    yield put(setLoading(true));
    const { data }: props = yield call(fetchData, characters, 'GET');
    if (!isEmpty(data?.results)) {
      const { results } = data;
      yield put(setCharData(results));
      yield put(setLoading(false));
      return;
    }
    console.log('Errore da Backend');
  } catch (error) {
    console.log(error);
  }
}

export default function* rootChar() {
  yield all([takeLatest(getData.type, getCharacters)]);
}
