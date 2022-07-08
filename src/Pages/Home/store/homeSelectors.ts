import { RootState } from 'src/app/store';

export const pathnameSelector = (state: RootState) =>
  state.router.location.pathname;
