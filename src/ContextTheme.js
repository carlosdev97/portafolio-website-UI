import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const themeContextValue = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
