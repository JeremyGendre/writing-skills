import React, {lazy, Suspense} from 'react';
import './assets/App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./component/Header/Header";

const HomePage = lazy(() => import("./page/HomePage"));
const WritingPage = lazy(() => import("./page/WritingPage"));
const ClickingPage = lazy(() => import("./page/ClickingPage"));

function App() {
  return (
      <Suspense fallback="Chargement...">
          <BrowserRouter>
              <Header/>
              <div className="flex">
                  <Switch>
                      <Route path='/click'><ClickingPage/></Route>
                      <Route path='/write'><WritingPage/></Route>
                      <Route path='/'><HomePage/></Route>
                  </Switch>
              </div>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;
