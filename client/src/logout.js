import { Component } from 'react';
import instance from "./axios";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
                location.replace("/");
            })
            .catch((err) => console.log("Error logging out", err));
    }

    render() { 
        return (
            <div style={{display: "flex"}} id="logout" onClick={() => this.handleLogOut()}>
                <h3 style={{marginBottom: 0, fontSize: 20}}>Log Out</h3>
                <ExitToAppIcon style={{position: 'relative'}}/>
            </div>
        );
    }
}
