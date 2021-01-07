import { Component } from "react";
import ProfilePic from "./profilepic";
import Uploader from "./uploader";
import instance from "./axios";
import axios from "axios";
import Profile from "./profile";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            uploaderIsVisible: false,
            profilePic: null
        };
    }

    componentDidMount() {
        axios.get("/user")
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    id: data.id,
                    first: data.first,
                    last: data.last,
                    email: data.email
                });
                console.log("App mounted!");
            }).catch((err) => console.log("Error mounting!:", err));
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
                <ProfilePic toggleUploader={() => this.toggleUploader()} profilePic={this.state.profilePic} />
                { this.state.uploaderIsVisible && (
                    <Uploader setImage={() => this.setImage()} />
                )}
                <Profile />
            </div>
        );
    }
}