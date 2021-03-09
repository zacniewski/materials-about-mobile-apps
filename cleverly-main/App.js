import 'react-native-gesture-handler';
import React from 'react';

import LangProvider, { LangModeProvider } from './src/lang/LangProvider';
import AppRouter from './src/navigation';

export default function App() {
  return (
    <LangModeProvider>
      <LangProvider>
        <AppRouter />
      </LangProvider>
    </LangModeProvider>
  );
}
