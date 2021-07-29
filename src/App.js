import React from 'react'
import AppHeader from './components/AppHeader'
import AppAside from './components/AppAside'
import FormSwitcher from './components/FormSwitcher'
import NotesList from './components/NotesList'
import MainGridContainer from './components/MainGridContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <MainGridContainer>
      <AppHeader />

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
  );
}

export default App;
