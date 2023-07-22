import {configureStore} from '@reduxjs/toolkit';
import CategoriesDataSlice from './slices/CategoriesDataSlice';
import PopularDataSlice from './slices/PopularDataSlice';

const store = configureStore({
  reducer: {
    categoriesData: CategoriesDataSlice,
    popularData: PopularDataSlice,
  },
});

export default store;
