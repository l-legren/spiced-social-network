import React from "react";
import { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
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
        axios.post("/registration", this.state)
            .then(() => {
                location.replace("/");
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
                <h1>Join our Community!</h1>
                <form method="POST">
                    <input
                        name="first"
                        type="text"
                        onChange={(e) => this.handleChange(e)}
                        // value={this.state.first}
                        placeholder="First Name"
                        required
                    ></input>
                    <input
                        name="last"
                        type="text"
                        onChange={(e) => this.handleChange(e)}
                        // value=""
                        placeholder="Last Name"
                        required
                    ></input>
                    <input
                        name="email"
                        type="text"
                        onChange={(e) => this.handleChange(e)}
                        // value=""
                        placeholder="E-Mail"
                        required
                    ></input>
                    <input
                        name="password"
                        type="password"
                        onChange={(e) => this.handleChange(e)}
                        // value=""
                        placeholder="Password"
                        required
                    ></input>
                    <button onClick={() => this.handleClick()} type="submit">Submit!</button>
                    { this.state.error && <p style={{color: "red"}}>Something broke! Please fill in missing fields above!</p> }
                </form>
            </div>
        );
    }
}
