import { Component } from "react";
import ProfilePic from "./profilepic";
import Uploader from "./uploader";
import instance from "./axios";
import axios from "axios";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            uploaderIsVisible: false,
        };
    }

    componentDidMount() {
        axios.get("/user")
            .then(({data}) => {
                console.log(data);
                this.setState(data);
                console.log("App mounted!");
            }).catch((err) => console.log("Error mounting!"));
    }

    toggleUploader() {
        this.setState({
            uploaderIsVisible: !this.state.uploaderIsVisible
        });
    }
    // pass new pic url as an argument from the uploader component
    setImage(newProfilePic) {
        this.setState({
            profilePic: "Selected Pic"
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>App</h1>
                <ProfilePic />
                <h2 onClick={() => this.toggleUploader()}>CLICK TO TOGGLE UPLOADER</h2>
                { this.state.uploaderIsVisible && (
                    <Uploader setImage={() => this.setImage()} />
                )}
            </div>
        );
    }
}