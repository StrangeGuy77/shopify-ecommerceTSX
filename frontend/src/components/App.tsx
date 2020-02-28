import * as React from "react";
import "../css/App.css";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignIn from "../pages/UserAuth/UserAuth";
import Checkout from '../pages/Checkout/Checkout';
import { auth, createUserProfileDocument } from "../services/firebase/firebase";
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';
import { store } from "../redux/store";
import GlobalState from "../redux/state";
import { Dispatch } from "redux";
import { selectCurrentUser } from "../redux/user/userSelectors";

class App extends React.Component<IProps, any> {

  state = {
    user: null
  };

  unsubscribeFromAuth: any = null;
  user: any = null;

  componentDidMount () {

    store.subscribe(() => {
      // Refetch state will declare user, therefore component will redirect user if they try to access login site once again

      this.setState({
        user: store.getState().user.currentUser
      }, () => {
        this.user = this.state.user;
      });
    });

    const { setCurrentUser } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth)
      {
        const userRef = await createUserProfileDocument(
          userAuth as firebase.User
        ) as firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
        userRef.onSnapshot(snapshot => {
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
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/signin" render={() =>
            this.state.user ? (
              <Redirect to='/' />
            ) : (
                <SignIn />
              )
          } />
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
  currentUser?: any;
  user?: any;
}

const mapStateToProps = (state: GlobalState) => ({
  setCurrentUser: selectCurrentUser(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App); 
