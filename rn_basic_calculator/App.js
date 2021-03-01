import React from 'react';
import MainScreen from 'screens/main/main';
import {ThemeProvider} from 'contexts/themes';

function App() {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
}

export default App;
