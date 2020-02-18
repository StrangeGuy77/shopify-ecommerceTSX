import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById("root"));
