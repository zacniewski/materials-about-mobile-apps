import React, {createContext, useState} from 'react';
import {THEME} from 'utils/themes';

const INITIAL_STATE = THEME.PINKISH;

const ThemeContext = createContext(null);

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(INITIAL_STATE);
  const contextValue = [theme, setTheme];
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeProvider};
export default ThemeContext;
