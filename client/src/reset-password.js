import { Component } from "react";
import instance from "./axios";

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: reset
        };
    }

    handleChange(e) {
        // console.log("Handling Change!");
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => console.log(this.state)
        );
    }

    handleClick() {
        console.log("Clicking works!!!");
        let obj = this.state;
        instance.post("/reseting", obj)
            .then((obj) => {
                console.log("This is my reg object: ", obj);
                location.replace("/");
                this.setState({
                    error: null
                });
            })
            .catch((err) => {
                console.log("Error sending post to the server: ",err);
                this.setState({
                    error: true
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Reset Password</h1>
                <input
                    name="email"
                    type="email"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="E-Mail"
                    required
                ></input>
                <button onClick={() => this.handleClick()} type="submit">Send Code</button>
            </div>
        );
    }
}
