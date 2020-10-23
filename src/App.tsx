import React, {lazy, Suspense} from 'react';
import './assets/App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Header from "./component/Header/Header";
import Error from "./component/Error/Error";

const HomePage = lazy(() => import("./page/HomePage"));
const WritingPage = lazy(() => import("./page/WritingPage"));
const ClickingPage = lazy(() => import("./page/click/ClickingPage"));

function App() {
  return (
      <Suspense fallback="Chargement...">
          <BrowserRouter>
              <Header/>
              <div className="flex flex-col flex-1">
                  <Switch>
                      <Route path='/click'><ClickingPage/></Route>
                      <Route path='/write'><WritingPage/></Route>
                      <Route exact path='/'><HomePage/></Route>
                      <Route exact path='/404'><Error code={ 404 } text='Page not found'/></Route>
                      <Redirect to='/404'/>
                  </Switch>
              </div>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;
