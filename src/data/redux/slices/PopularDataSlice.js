import {createSlice} from '@reduxjs/toolkit';
import {popularData} from '../../../../assets/data/PopularData';

export const PopularDataSlice = createSlice({
  name: 'PopularDataSlice',
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  reducers: {
    getPopularData: state => {
      state.data = popularData;
    },
  },
});

export const {getPopularData} = PopularDataSlice.actions;

export default PopularDataSlice.reducer;
