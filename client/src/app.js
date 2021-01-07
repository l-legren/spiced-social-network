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
            profilePic: null,
        };
    }

    componentDidMount() {
        axios
            .get("/user")
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    id: data.id,
                    first: data.first,
                    last: data.last,
                    email: data.email,
                    profilePic: data.profile_pic,
                    bio: data.bio
                });
                console.log("App mounted!");
            })
            .catch((err) => console.log("Error mounting!:", err));
    }

    toggleUploader() {
        this.setState({
            uploaderIsVisible: !this.state.uploaderIsVisible,
        });
    }

    // pass new pic url as an argument from the uploader component
    setImage(urlProfilePic) {
        this.setState({
            profilePic: urlProfilePic,
        });
    }

    render() {
        console.log("State of App", this.state);
        return (
            <div>
                <h1>App</h1>
                <ProfilePic
                    toggleUploader = {() => this.toggleUploader()}
                    profilePic = {this.state.profilePic}
                    first = {this.state.first}
                />
                {this.state.uploaderIsVisible && (
                    <Uploader 
                        setImage={(urlProfilePic) => this.setImage(urlProfilePic)} 
                    />
                )}
                <Profile 
                    first={this.state.first}
                    last={this.state.last}
                    profilePic={this.state.profilePic}
                    bio={this.state.bio}
                />
            </div>
        );
    }
}
