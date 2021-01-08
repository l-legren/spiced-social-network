import { Component } from 'react';
import instance from "./axios";

export default class OtherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        console.log("Mounted, id: ", this.props.params.id);
        instance
            .get("/user-info/" + this.props.params.id)
            .then(({data}) => {
                console.log("Data from server: ", data);
                console.log(this.props.key);
                if (this.props.params.id == data.loggedId) {
                    this.props.history.push("/");
                } else {
                    this.setState(data.data);
                }
            }).catch((err) => console.log("Error fetching Data from Server: ", err));
    }

    render() { 
        console.log("Other Profile's state: ", this.state);
        return (
            <>  
                <h1>{this.state.first} {this.state.last}</h1>
                { this.state.profile_pic && (
                    <img
                        // style={{ width: 300, height: 300}}
                        src={this.state.profile_pic}
                        alt={this.state.first}
                    ></img>
                )}
                { !this.state.profile_pic && (
                    <img
                        src="/default.jpg"
                        alt={this.state.first}
                    ></img>
                )}
                { this.state.bio && <h2>{this.state.bio}</h2> }
            </>
        );
    }
}
 
