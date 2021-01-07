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
        // when clicking on save while in edit mode -->
        // We need to make a post request in here to update the value of our Bio in dabtabase?
        // Once succesful, call method passed down from the App component, updating bio in state in App
        const obj = this.state.newBio;
        console.log("Sending request to the server!", this.state);
        instance
            .post("/update-bio", {
                random: "Random line"
            }).then(() => {
                console.log("Got response from server");
            }).catch((err) => console.log("Error sending bio:", err));


    }

    render() { 
        return (
            <>
                <h1>BIO EDITOR</h1>
                { this.state.textAreaVisible && (
                    <>
                        <textarea
                            onChange={(e) => this.handleText(e)}
                            // value the text that is already saved, passed down from state in App???
                        />
                        <button onClick={() => this.uploadBio()} >Save Bio!</button>
                    </>
                )}
                { !this.state.textAreaVisible && (
                    <>
                        <h2>ACTUAL BIO FROM STATE!!</h2>
                        <button onClick={() => this.toggleTextarea()}>Edit your Bio!</button>
                    </>
                )}
            </>
        );
    }
}