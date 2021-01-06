import { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Registration from "./registration";
import Login from "./login";
import ResetPassword from "./reset-password";

export default class Welcome extends Component {

    render() {
        return (
            <>
                <h1>WELCOME!</h1>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Registration} />
                        <Route path="/login" component={Login} />
                        <Route path="/reset-password" component={ResetPassword} />
                    </div>
                </HashRouter>
            </>
        );
    }
}