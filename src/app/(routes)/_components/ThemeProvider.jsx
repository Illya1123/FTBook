'use client';
import React, { createContext, useState, useContext } from 'react';

const HeaderContext = createContext();

function ThemeProvider({ children }) {
	const [isHeader, setIsHeader] = useState(true);
	const [roleUser, setRoleUser] = useState('user'); // Initialize roleUser with 'admin'

	return (
		<HeaderContext.Provider value={{ isHeader, setIsHeader, roleUser, setRoleUser }}>
			{children}
		</HeaderContext.Provider>
	);
}

export default ThemeProvider;

export const useTheme = () => useContext(HeaderContext);
