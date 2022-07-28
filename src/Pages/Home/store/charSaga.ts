import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchData } from 'src/utils/fetchData';
import { isEmpty } from 'lodash';
import { CharDataTypes, InfoTypes } from './charSlice.interface';
import { setCharData, setInfo, setLoading, getData } from './charSlice';
import { linkSelector } from './charSelectors';

type props = {
  data: { info: InfoTypes; results: [CharDataTypes] };
};

function* getCharacters() {
  const link: string = yield select(linkSelector);
  try {
    yield put(setLoading(true));
    const { data }: props = yield call(fetchData, link, 'GET');
    if (!isEmpty(data?.results) && !isEmpty(data?.info)) {
      const { results } = data;
      const { info } = data;
      yield put(setCharData(results));
      yield put(setInfo(info));
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
