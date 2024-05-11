'use client';
import React, { createContext, useState, useContext } from 'react';

const HeaderContext = createContext();

function ThemeProvider({ children }) {
	const [isHeader, setIsHeader] = useState(true);
	const [roleUser, setRoleUser] = useState('user');
	const [userId, setUserId] = useState();
	const [dataCheckout, setDataCheckout] = useState([]);
	const [totalPriceCheckout, setTotalPriceCheckout] = useState();
	const [purchasedProduct, setPurchasedProduct] = useState([]);
	return (
		<HeaderContext.Provider
			value={{
				isHeader,
				setIsHeader,
				roleUser,
				setRoleUser,
				setDataCheckout,
				dataCheckout,
				setTotalPriceCheckout,
				totalPriceCheckout,
				purchasedProduct,
				setPurchasedProduct,
				userId,
				setUserId,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
}

export default ThemeProvider;

export const useTheme = () => useContext(HeaderContext);
