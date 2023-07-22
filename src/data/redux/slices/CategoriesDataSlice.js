import {createSlice} from '@reduxjs/toolkit';
import {categoriesData} from '../../../../assets/data/CategoriesData';

export const CategoriesDataSlice = createSlice({
  name: 'CategoriesDataSlice',
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  reducers: {
    getCategoriesData: state => {
      state.data = categoriesData;
    },
  },
});

export const {getCategoriesData} = CategoriesDataSlice.actions;

export default CategoriesDataSlice.reducer;
