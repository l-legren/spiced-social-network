import { Component } from "react";
import instance from "./axios";
// import PublishIcon from '@material-ui/icons/Publish';

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(e) {
        // console.log(e.target.files[0]);
        this.setState({
            picture: e.target.files[0]
        });
    }

    handleUpload() {
        const fd = new FormData();
        fd.append("picture", this.state.picture);
        instance.post("/upload-picture", fd)
            .then(({data}) => {
                this.props.setImage(data.pic);
            }).catch((err) => console.log("Error requesting from Server: ", err));
    }

    render() {
        console.log("State in Uploader: ", this.state);
        console.log("Props in Uploader: ", this.props);
        return (
            <div className="file-wrapper">
                <label htmlFor="file">New Photo</label>
                <input
                    onChange={(e) => this.handleChange(e)}
                    id="file"
                    type="file"
                    name="image"
                    accept="image/*"
                />
                {/* <PublishIcon /> */}
                <input 
                    onClick={() => this.handleUpload()}
                    id="submit-button"
                    type="button"
                    value="Submit!"
                />
            </div>
        );
    } 
}