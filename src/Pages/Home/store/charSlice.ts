import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { CharState } from './charSlice.interface';

const initialState: CharState = {
  data: [{}],
  info: {},
  link: 'https://rickandmortyapi.com/api/character',
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
    setLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    setInfo: (state, action: PayloadAction<{}>) => {
      state.info = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const selectData = (state: RootState) => state.home.Data;

export const { setCharData, setLink, setInfo, setLoading, getData } =
  charSlice.actions;
export default charSlice.reducer;
