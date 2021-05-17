import React from "react";

import CoinPage from "../pages/CoinPage";
import CoinLandingPage from "../pages/CoinLandingPage";
import {BrowserRouter, Route} from "react-router-dom";
import {CoinListContextProvide} from "../context/coinListContext"


function App() {
  return (
    <div className="App">
    <CoinListContextProvide>
      <BrowserRouter>
          <Route exact path='/' component={CoinLandingPage} />
          <Route path="/coin/:id" component={CoinPage} />
      </BrowserRouter>
    </CoinListContextProvide>
    </div>
  );
}

export default App;
