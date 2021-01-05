import { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Registration from "./registration";
import Login from "./login";

export default class Welcome extends Component {

    render() {
        return (
            <>
                <h1>WELCOME!</h1>
                <HashRouter>
                    <Link to="/login">Click here to log in</Link><br></br>
                    <Link to="/">Click here to sign up</Link>
                    <div>
                        <Route exact path="/" component={Registration} />
                        <Route path="/login" component={Login} />
                    </div>
                </HashRouter>
            </>
        );
    }
}