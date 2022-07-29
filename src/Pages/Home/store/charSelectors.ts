import { RootState } from 'src/app/store';

export const pathnameSelector = (state: RootState) =>
  state.router.location.pathname;

export const characterSelector = (state: RootState) => state.home.data;

export const infoSelector = (state: RootState) => state.home.info;

export const linkSelector = (state: RootState) => state.home.link;

export const isLoadingSelector = (state: RootState) => state.home.isLoading;
