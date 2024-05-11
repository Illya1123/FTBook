import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [
			{ id: '662e1402382f8696bd2fa764', quantity: 1 },

			{ id: '663376f4e7f9fda487047237', quantity: 1 },
		],
	},
	reducers: {
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

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, removeAllProduct } =
	cartSlice.actions;

export default cartSlice.reducer;
