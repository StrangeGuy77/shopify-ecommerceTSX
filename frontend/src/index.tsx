import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {config} from "dotenv";

config();
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById("root")
);
