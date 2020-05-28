import React from 'react';
import { ThemeProvider } from 'styled-components';
import Dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
