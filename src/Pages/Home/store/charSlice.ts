import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { CharState } from './charSlice.interface';

const initialState: CharState = {
  data: [{}],
  pages: {},
  isLoading: false,
  Status: 'idle',
};

export const charSlice = createSlice({
  name: 'char',
  initialState,
  reducers: {
    getData: () => {},
    setCharData: (state, action: PayloadAction<[{}]>) => {
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

export const { setCharData, setPages, setLoading, getData } = charSlice.actions;
export default charSlice.reducer;
