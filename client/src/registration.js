import { Component } from "react";
import { Link } from "react-router-dom";
import instance from "./axios";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Registration extends Component {
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
            .post("/registration", obj)
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
                        <Row>
                            <h1 style={{ textAlign: "center" }}>
                                Join our Community!
                            </h1>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <input
                                name="first"
                                type="text"
                                onChange={(e) => this.handleChange(e)}
                                placeholder="First Name"
                                required
                            ></input>
                        </Row>
                        <br></br>
                        <Row>
                            <input
                                name="last"
                                type="text"
                                onChange={(e) => this.handleChange(e)}
                                placeholder="Last Name"
                                required
                            ></input>
                        </Row>
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
                        <div id="reg-wrapper">
                            <Button
                                onClick={() => this.handleClick()}
                                type="submit"
                            >
                                Submit!
                            </Button>
                            {this.state.error && (
                                <p style={{ color: "red" }}>
                                    Something broke! Please fill in missing
                                    fields above!
                                </p>
                            )}
                            <br></br>
                            <p>Already a member?</p>
                            <Link to="/login">Click here to log in</Link>
                        </div>
                    </Col>
                    <Col lg={4} md={4}></Col>
                </Row>
            </Container>
        );
    }
}
