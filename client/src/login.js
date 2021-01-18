import { Component } from "react";
import instance from "./axios";
import { Router, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    handleChange(e) {
        // console.log("Handling Change!");
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log(this.state)
        );
    }

    handleClick() {
        console.log("Clicking works!!!");
        let obj = this.state;
        instance
            .post("/login", obj)
            .then((obj) => {
                console.log("This is my reg object: ", obj);
                location.replace("/");
                this.setState({
                    error: null,
                });
            })
            .catch((err) => {
                console.log("Error sending post to the server: ", err);
                this.setState({
                    error: true,
                });
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={4} md={4}></Col>
                    <Col lg={4} md={4}>
                        <h1>LOG IN!</h1>
                        <br></br>
                        <Row>
                            <input
                                name="email"
                                type="email"
                                onChange={(e) => this.handleChange(e)}
                                placeholder="E-Mail"
                                required
                            ></input>
                        </Row>
                        <br></br>
                        <Row>
                            <input
                                name="password"
                                type="password"
                                onChange={(e) => this.handleChange(e)}
                                placeholder="Password"
                                required
                            ></input>
                        </Row>
                        <br></br>
                        <div id='login-wrapper'>
                            <Button
                                onClick={() => this.handleClick()}
                                type="submit"
                            >
                                Log In!
                            </Button>
                            {this.state.error && (
                                <p style={{ color: "red" }}>
                                    Something broke! Please fill in missing
                                    fields above!
                                </p>
                            )}
                            <br></br>
                            <p>Forgot your Password?</p>
                            <Link to="/">Click here to sign up</Link>
                            <br></br>
                            <Link to="/reset-password">
                                Click here to reset your password!
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={4}></Col>
                </Row>
            </Container>
        );
    }
}
