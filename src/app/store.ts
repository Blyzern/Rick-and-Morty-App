import { combineReducers } from 'redux';
import { createBrowserHistory, History } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import charReducer from 'src/Pages/Home/store/charSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    home: charReducer,
    router: routerReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false })
      .concat(sagaMiddleware)
      .concat(routerMiddleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const history: History = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
