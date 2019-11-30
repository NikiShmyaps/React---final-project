import React from "react";
import { MainPage, CartPage } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "../app-header";

import Background from "./food-bg.jpg";

const App = () => {
  return (
    <Router>
      <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        <AppHeader />
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" component={CartPage} />
      </div>
    </Router>
  );
};

export default App;