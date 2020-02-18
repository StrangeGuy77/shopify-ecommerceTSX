import * as React from "react";
import "../css/App.css";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignIn from "../pages/UserAuth/UserAuth";
import { auth, createUserProfileDocument } from "../services/firebase/firebase";
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';

class App extends React.Component<IProps> {

  unsubscribeFromAuth: any = null;

  componentDidMount () {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth)
      {
        const userRef = await createUserProfileDocument(
          userAuth as firebase.User
        );
        userRef?.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else
      {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
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

export interface IState {
  currentUser: IUserProperties | null;
}

export interface IUserProperties {
  id?: string;
  displayName?: string;
  email?: string;
  createdAt?: Date;
}

interface IProps {
  setCurrentUser?: any;
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App); 