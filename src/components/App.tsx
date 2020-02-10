import * as React from "react";
import "../css/App.css";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Switch } from 'react-router-dom'
import ShopPage from '../pages/ShopPage/ShopPage'

export default class App extends React.Component {
  render() {
    return (
      <div className="XD">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>

      </div>
    );
  }
}
