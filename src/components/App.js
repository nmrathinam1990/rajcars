import React from "react";
import { Header, Main, Footer } from "./Layouts";
import { About, Buy, Sell, Exchange, Loan, Contact } from "./Pages";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/sell" component={Sell} />
        <Route exact path="/exchange" component={Exchange} />
        <Route exact path="/loan" component={Loan} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
