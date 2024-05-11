// file: store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartReducer';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		// other reducers if any
	},
});

export default store;
