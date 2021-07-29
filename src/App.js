import React from "react";
import AppHeader from "./components/AppHeader";
import AppAside from "./components/AppAside";
import FormSwitcher from "./components/FormSwitcher";
import NotesList from "./components/NotesList";
import MainGridContainer from "./components/MainGridContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState(true)

  function toggleTheme() {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <GlobalStyles />

      <MainGridContainer>
        <AppHeader toggleTheme={toggleTheme}/>

        <BrowserRouter>
          <AppAside />
          <Switch>
            <Route exact path="/">
              <NotesList />
            </Route>

            <Route path="/create">
              <FormSwitcher />
            </Route>

            <Route path="*">
              <h1>Invalid route</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </MainGridContainer>
    </ThemeProvider>
  );
}

export default App;
