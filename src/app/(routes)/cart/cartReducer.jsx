import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [
			// { id: '662e1402382f8696bd2fa764', quantity: 1 },
			// { id: '663376f4e7f9fda487047237', quantity: 1 },
		],
	},
	reducers: {
		setCartItems: (state, action) => {
			state.items = action.payload;
		},
		addItem: (state, action) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);

			if (item) {
				item.quantity++; // Nếu mục đã tồn tại, tăng số lượng lên 1
			} else {
				state.items.push({ id, quantity: 1 }); // Nếu mục chưa tồn tại, thêm mục mới vào giỏ hàng với số lượng là 1
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			state.items = state.items.filter((item) => item.id !== id);
		},
		increaseQuantity: (state, action) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) {
				item.quantity++;
			}
		},
		decreaseQuantity: (state, action) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item && item.quantity > 1) {
				item.quantity--;
			}
		},
		removeAllProduct: (state, action) => {
			state.items = [];
		},
	},
});

export const {
	setCartItems,
	addItem,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
	removeAllProduct,
} = cartSlice.actions;

export default cartSlice.reducer;

export const fetchCartItems = (userId) => async (dispatch) => {
	try {
		const response = await axios.get(
			`https://backend-book-store-two.vercel.app/cart/user/${userId}`,
		);
		const cartData = response.data;
		const products = cartData.length > 0 ? cartData[0].products : [];

		const items = products.map((product) => ({
			id: product.productId,
			quantity: product.quantity,
		}));
		dispatch(setCartItems(items));
	} catch (error) {
		console.error('Error fetching cart items:', error);
	}
};
