import { Component } from "react";
import instance from "./axios";
import { Router, Link } from "react-router-dom";

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            view: 1 
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
        // console.log("Clicking works!!!");
        let obj = this.state;
        instance.post("/password/reset/start", obj)
            .then((obj) => {
                // console.log("This is my req object: ", obj);
                this.setState({
                    error: null,
                    view: 2
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
                { this.state.view == 1 && (
                    <div>
                        <h2>Insert your Mail below</h2>
                        <input
                            name="email"
                            type="email"
                            onChange={(e) => this.handleChange(e)}
                            placeholder="E-Mail"
                            required
                        ></input>
                        <button onClick={() => this.handleClick()} type="submit">Send Code</button>
                    </div>
                )}
                { this.state.view == 2 && (
                    <div>
                        <h2>Enter the code we sent to your Mail!</h2>
                        <input
                            name="email"
                            type="email"
                            onChange={(e) => this.handleChange(e)}
                            placeholder="E-Mail"
                            required
                        ></input>
                        <button onClick={() => this.handleClick()} type="submit">Send Code</button>
                        <h2>Insert your new Password</h2>
                        <input
                            name="email"
                            type="email"
                            onChange={(e) => this.handleChange(e)}
                            placeholder="E-Mail"
                            required
                        ></input>
                        <button onClick={() => this.handleClick()} type="submit">Send Code</button>
                    </div>
                )}
                { this.state.view == 3 && (
                    <div>
                        <p>Your password was succesfully restored</p>
                        <br></br>
                        <p>You can now </p>
                        {/* <Router>
                            <Link to="/login">log in</Link>
                        </Router> */}
                        <p> with your new password</p>
                    </div>
                )}
                { this.state.error && <p style={{color: "red"}}>Something broke! Please fill in missing fields above!</p> }
            </div>
        );
    }
}
