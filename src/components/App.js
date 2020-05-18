import React from "react";
import { Header, Main, Footer } from "./Layouts";
import {
  About,
  Buy,
  Sell,
  Exchange,
  Loan,
  Contact,
  GenericNotFound
} from "./Pages";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter forceRefresh={false}>
      <Switch>
        <Route exact path="/">
          <Header headerClass="topbar-dark"></Header>
          <Main />
          <Footer></Footer>
        </Route>
        <Route exact path="/about">
          <Header headerClass="default"></Header>
          <About />
          <Footer></Footer>
        </Route>
        <Route exact path="/buy">
          <Header headerClass="default"></Header>
          <Buy></Buy>
          <Footer></Footer>
        </Route>
        <Route exact path="/sell">
          <Header headerClass="default"></Header>
          <Sell></Sell>
          <Footer></Footer>
        </Route>
        <Route exact path="/exchange">
          <Header headerClass="default"></Header>
          <Exchange></Exchange>
          <Footer></Footer>
        </Route>
        <Route exact path="/services">
          <Header headerClass="default"></Header>
          <Loan></Loan>
          <Footer></Footer>
        </Route>
        <Route exact path="/contact">
          <Header headerClass="default"></Header>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route component={GenericNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
