import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

export interface HomeState {
  //creare un file apparte homeSlice.Interface.ts
  Data: object;
  Pages: object;
  isLoading: boolean;
  Status: string;
}

const initialState: HomeState = {
  Data: [],
  Pages: {},
  isLoading: false,
  Status: 'idle',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: () => {},
    setHomeData: (state, action: PayloadAction<Array<object>>) => {
      state.Data = action.payload;
    },
    setPages: (state, action: PayloadAction<object>) => {
      state.Pages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const selectData = (state: RootState) => state.home.Data;

export const { setHomeData, setPages, setLoading, getData } = homeSlice.actions;
export default homeSlice.reducer;
