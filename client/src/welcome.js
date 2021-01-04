import React from "react";
import {Component} from "react";
import Registration from "./registration";

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>WELCOME!</h1>
                <Registration />
            </div>
        );
    }
}