import * as React from "react";
import "../css/App.css";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import ShopPage from '../pages/ShopPage/ShopPage'
import SignIn from '../pages/UserAuth/UserAuth'


export default class App extends React.Component {
  render() {
    return (
      <div className="XD">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="" component={SignIn} />
        </Switch>
      </div>
    );
  }
}
