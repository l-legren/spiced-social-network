import { Component } from "react";
import { Link } from "react-router-dom";
import instance from "./axios";
import { Button, Form } from "react-bootstrap";

export default class RegistrationBs extends Component {
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
            <>
                <h1>Join our Community!</h1>
                {/* <Form>
                    <Form.Group controlId="first">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="first"
                            placeholder="Enter Name"
                            onChange={(e) => this.handleChange(e)}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="last">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="last"
                            placeholder="Enter Last Name"
                            onChange={(e) => this.handleChange(e)}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter eMail"
                            onChange={(e) => this.handleChange(e)}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => this.handleChange(e)}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => this.handleClick()}>
                        Submit
                    </Button>
                    { this.state.error && <p style={{color: "red"}}>Something broke! Please fill in missing fields above!</p> }
                    <p>Already a member?</p>
                    <Link to="/login">Click here to log in</Link> 
                </Form> */}
            </>
        );
    }
}
