import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Login from "./login";
import ResetPassword from "./reset-password";
import App from "./app";

let elem;
if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));


// else if (location.pathname == "/login") {
//     elem = <Login />;
// } else if (location.pathname == "/reset-password") {
//     elem = <ResetPassword />;
// }  