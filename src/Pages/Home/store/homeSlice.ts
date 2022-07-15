import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { HomeState } from './homeSlice.interface';

const initialState: HomeState = {
  data: [{}],
  pages: {},
  isLoading: false,
  Status: 'idle',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: () => {},
    setHomeData: (state, action: PayloadAction<[{}]>) => {
      state.data = action.payload;
    },
    setPages: (state, action: PayloadAction<{}>) => {
      state.pages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const selectData = (state: RootState) => state.home.Data;

export const { setHomeData, setPages, setLoading, getData } = homeSlice.actions;
export default homeSlice.reducer;
