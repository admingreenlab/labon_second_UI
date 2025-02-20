'use client'
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchState, setSearchState] = useState({});

    return (
        <SearchContext.Provider value={{ searchState, setSearchState }}>
            {children}
        </SearchContext.Provider>
    );
};