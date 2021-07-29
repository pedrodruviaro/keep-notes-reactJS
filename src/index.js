import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reset from './styles/Reset'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import {lightTheme} from './styles/Theme'


ReactDOM.render(
  <React.StrictMode>
    <Reset />

    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
