import { Component } from "react";
import ProfilePic from "./profilepic";
import Uploader from "./uploader";
import axios from "axios";
import Profile from "./profile";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import OtherProfile from "./otherprofile";

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
                    bio: data.bio,
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

    setBio(newBio) {
        this.setState({
            bio: newBio,
        });
    }

    closeModal() {
        this.setState({
            uploaderIsVisible: false
        });
    }

    render() {
        console.log("State of App", this.state);
        return (
            <BrowserRouter>
                <div>
                    <div className="nav-top">
                        <div>
                            <h1>...mySocial</h1>
                        </div>
                        <div className="pic-profile-wrapper">
                            <div id="name-container">
                                <h2>{this.state.first}</h2>
                            </div>
                            <ProfilePic
                                toggleUploader={() => this.toggleUploader()}
                                profilePic={this.state.profilePic}
                                first={this.state.first}
                                last={this.state.last}
                            />
                            {this.state.uploaderIsVisible && (
                                <Uploader
                                    setImage={(urlProfilePic) =>
                                        this.setImage(urlProfilePic)
                                    }
                                    closeModal={() => 
                                        this.closeModal()}
                                />
                            )}
                        </div>
                    </div>
                    <div className="divisory"></div>
                    <div className="profiles">
                        <Route
                            path="/user/:id"
                            render={(props) => (
                                <OtherProfile
                                    history={props.history}
                                    key={props.match.url}
                                    params={props.match.params}
                                    path={props.match.path}
                                    isExact={props.match.isExact}
                                    url={props.match.url}
                                />
                            )}
                        />

                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Profile
                                    first={this.state.first}
                                    last={this.state.last}
                                    profilePic={this.state.profilePic}
                                    bio={this.state.bio}
                                    toggleUploader={() => this.toggleUploader()}
                                    setBio={(newBio) => this.setBio(newBio)}
                                />
                            )}
                        ></Route>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
