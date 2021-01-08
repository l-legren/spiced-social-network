import { Component } from "react";
import instance from "./axios";

export default class OtherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNotInDataBase: false,
        };
    }

    componentDidMount() {
        console.log("Mounted, id: ", this.props.params.id);
        instance
            .get("/user-info/" + this.props.params.id)
            .then(({ data }) => {
                console.log("Data from server: ", data);
                if (this.props.params.id == data.loggedId) {
                    this.props.history.push("/");
                }
                if (data.success == false) {
                    this.setState({
                        userNotInDataBase: true,
                    });
                }
                this.setState(data.data);
            })
            .catch((err) =>
                console.log("Error fetching Data from Server: ", err)
            );
    }

    render() {
        console.log("Other Profile's state: ", this.state);
        return (
            <>
                {this.state.userNotInDataBase ? (
                    <>
                        <h1>WE ARE SO SORRY!</h1>
                        <div>
                            The requested user doesn&apos;t exist in our
                            Database
                        </div>
                        <img
                            src="/user_not_found.jpg"
                            alt="User not found"
                        ></img>
                    </>
                ) : (
                    <>
                        <h1>
                            {this.state.first} {this.state.last}
                        </h1>
                        {this.state.profile_pic && (
                            <img
                                src={this.state.profile_pic}
                                alt={this.state.first}
                            ></img>
                        )}
                        {!this.state.profile_pic && (
                            <img
                                src="/default.jpg"
                                alt={this.state.first}
                            ></img>
                        )}
                        {this.state.bio && <h2>{this.state.bio}</h2>}
                    </>
                )}
            </>
        );
    }
}