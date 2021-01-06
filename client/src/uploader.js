import { Component } from "react";

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log("Props in Uploader: ", this.props);
        return (
            <div>
                <input
                    id="file-button"
                    type="file"
                    name="image"
                    accept="image/*"
                />
            </div>
        );
    } 
}