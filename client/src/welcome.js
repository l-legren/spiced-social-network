import { Component } from "react";
import Registration from "./registration";

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>WELCOME!</h1>
                <Registration />
            </>
        );
    }
}