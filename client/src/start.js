import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Login from "./login";

let elem;
if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else if (location.pathname == "/login") {
    elem = <Login />;
} else {
    elem = <p>Home Page!</p>;
}

ReactDOM.render(elem, document.querySelector("main"));


