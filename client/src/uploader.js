import { Component } from "react";
import instance from "./axios";
import { connect } from 'react-redux';
import {updatePhoto} from './actions.js';
// import LogOut from "./logout";
// import PublishIcon from '@material-ui/icons/Publish';

export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    handleChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.setState({
                preview: reader.result
            });
        };

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
                this.props.closeModal();
            }).catch((err) => console.log("Error requesting from Server: ", err));
    }

    render() {
        console.log("State in Uploader: ", this.state);
        console.log("Props in Uploader: ", this.props);
        return (
            <div className="file-wrapper">
                <div className="label-wrapper">
                    <label htmlFor="file">New Photo</label>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        id="file"
                        type="file"
                        name="image"
                        accept="image/*"
                    />
                    { this.state.preview && (
                        <div className="preview-wrapper">
                            <img id="before-submit" src={this.state.preview} lat="image to upload"></img>
                            <p>This one?</p>
                        </div>
                    ) }
                </div>
                { this.state.preview && (
                    <input 
                        onClick={() => this.handleUpload()}
                        id="submit-button"
                        type="button"
                        value="Submit!"
                    />
                ) }
                <span onClick={this.props.closeModal} id="close">&times;</span>
            </div>
        );
    } 
}

// const mapStateToProps = null;
// function mapDispatchToProps(dispatch) {
//     return {
//         dispatchUpdatePhoto: (pic) => dispatch(updatePhoto(pic)) 
//     };
// }

// connect(mapStateToProps, mapDispatchToProps)(Uploader);