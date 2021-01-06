import { Component } from "react";
import instance from "./axios";

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: null
        };
    }

    handleChange(e) {
        // console.log(e.target.files[0]);
        this.setState({
            picture: e.target.files[0]
        });
    }

    upload() {
        const fd = new FormData();
        fd.append("picture", this.state.picture);
        instance.post("/upload-picture", fd)
            .then(({data}) => {
                // console.log("res from the server:", data);
                this.setState({
                    picture: data.pic
                });
            });
    }

    render() {
        console.log("Props in Uploader: ", this.state);
        return (
            <div>
                <input
                    onChange={(e) => this.handleChange(e)}
                    id="file-button"
                    type="file"
                    name="image"
                    accept="image/*"
                />
                <input 
                    onClick={() => this.upload()}
                    id="submit-button"
                    type="button"
                    value="Submit!"
                />
            </div>
        );
    } 
}