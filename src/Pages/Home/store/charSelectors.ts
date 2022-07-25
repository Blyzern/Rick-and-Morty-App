import { RootState } from 'src/app/store';

export const pathnameSelector = (state: RootState) =>
  state.router.location.pathname;

export const characterSelector = (state: RootState) => state.home.data;
