import { Component } from "react";
import instance from "./axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
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
        instance.post("/login", obj)
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
                <h1>LOG IN!</h1>
                <input
                    name="email"
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="E-Mail"
                    required
                ></input>
                <input
                    name="password"
                    type="password"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Password"
                    required
                ></input>
                <button onClick={() => this.handleClick()} type="submit">Log In!</button>
                { this.state.error && <p style={{color: "red"}}>Something broke! Please fill in missing fields above!</p> }
            </div>
        );
    }
}
