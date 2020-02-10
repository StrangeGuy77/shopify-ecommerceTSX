import React, { Component } from "react";
import "../css/App.css";
import HomePage from "../pages/HomePage/HomePage";
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="XD">
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}
