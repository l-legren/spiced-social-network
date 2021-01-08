import React, { Component } from 'react';
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
                console.log(data);
            }).catch((err) => console.log("Error fetching Data from Server: ", err));
    }

    render() { 
        return (
            <>
                <h1>
                    I AM OTHER PROFILE
                </h1>
            </>
        );
    }
}
 
