import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import ProfilePic from "./profilepic";
import Uploader from "./uploader";
import Profile from "./profile";
import OtherProfile from "./otherprofile";
import LogOut from "./logout";
import FindPeople from "./findpeople";
import UserFriends from "./userfriends";
import Header from "./header";
import Chat from "./chat";

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
            uploaderIsVisible: false,
        });
    }

    render() {
        console.log("State of App", this.state);
        return (
            <BrowserRouter>
                <div>
                    <Header
                        toggleUploader={() => this.toggleUploader()}
                        profilePic={this.state.profilePic}
                    />
                    {this.state.uploaderIsVisible && (
                        <Uploader
                            setImage={(urlProfilePic) =>
                                this.setImage(urlProfilePic)
                            }
                            closeModal={() => this.closeModal()}
                        />
                    )}
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
                        <Route
                            path="/users"
                            render={() => {
                                return <FindPeople />;
                            }}
                        />
                        <Route
                            path="/friends/:id"
                            render={(props) => {
                                return (
                                    <UserFriends id={props.match.params.id} />
                                );
                            }}
                        />
                        <Route path="/chatroom" render={() => <Chat />} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
