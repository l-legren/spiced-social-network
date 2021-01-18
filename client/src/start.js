// MODULES
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
// LOCAL FILES
import Welcome from "./welcome";
import App from "./app";
import reducer from "./reducer";
import { init } from "./socket";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem;
if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    init(store);
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
