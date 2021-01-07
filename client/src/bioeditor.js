import { Component } from 'react';
import instance from "./axios";

export default class BioEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaVisible: false,
            newBio: null
        };
    }

    componentDidMount() {
        this.setState({
            textAreaVisible: false
        });
    }

    toggleTextarea() {
        this.setState({
            textAreaVisible: !this.state.textAreaVisible
        });
    }

    handleText(e) {
        console.log(e.target.value);
        this.setState({
            newBio: e.target.value
        });
    }

    uploadBio() {
        const obj = this.state.newBio;
        // console.log("Sending request to the server!", this.state.newBio);
        this.setState({
            textAreaVisible: false
        });
        instance
            .post("/update-bio", {
                bio: this.state.newBio
            }).then(({data}) => {
                console.log("Got response from server", data[0]);
                this.props.setBio(data[0].bio);
                
            }).catch((err) => console.log("Error sending bio:", err));
    }

    render() { 
        return (
            <>
                <h1>{this.props.first} {this.props.last}</h1>
                { this.state.textAreaVisible && (
                    <>
                        <textarea
                            onChange={(e) => this.handleText(e)}
                            placeholder = {this.props.bio}
                        />
                        <button onClick={() => this.uploadBio()} >Save Bio!</button>
                    </>
                )}
                { !this.state.textAreaVisible && (
                    <>
                        { this.props.bio && (
                            <>
                                <h2>{this.props.bio}</h2>
                                <button onClick={() => this.toggleTextarea()}>EDIT BIO!</button>
                            </>
                        )}
                        { !this.props.bio && (
                            <>
                                <h2>{this.props.bio}</h2>
                                <button onClick={() => this.toggleTextarea()}>ADD BIO!</button>
                            </>
                        )}
                    </>
                )}
            </>
        );
    }
}