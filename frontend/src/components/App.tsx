import * as React from "react";
import "../css/App.css";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import ShopPage from '../pages/ShopPage/ShopPage'
import SignIn from '../pages/UserAuth/UserAuth'
import { auth } from '../services/firebase/firebase'


export default class App extends React.Component<any, IState> {


  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="XD">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="" component={SignIn} />
        </Switch>
      </div>
    );
  }
}


interface IState {
  currentUser: any;
}