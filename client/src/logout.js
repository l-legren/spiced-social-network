import { Component } from 'react';
import instance from "./axios";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';
import {ReactDOM} from "react";
// import Welcome from "./welcome";

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    handleLogOut() {
        console.log("Click works");
        instance.get("/log-out")
            .then(() => {
                console.log("Logged out succesfully!");
                this.setState({
                    redirect: true
                });
            })
            .catch((err) => console.log("Error logging out", err));
    }

    render() { 
        return (
            <>
                <ExitToAppIcon onClick={() => this.handleLogOut()} />
                { this.state.redirect && (
                    <Redirect to="/welcome" />
                ) }
            </>
        );
    }
}
