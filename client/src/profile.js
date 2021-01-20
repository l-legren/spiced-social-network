import BioEditor from "./bioeditor";
import ProfilePic from "./profilepic";
import { Link } from "react-router-dom";

export default function Profile({
    first,
    last,
    profilePic,
    bio,
    setBio,
    toggleUploader,
}) {
    return (
        <div className="profile-section">
            <h1>
                {first} {last}
            </h1>
            <div className="row-wrapper">
                <ProfilePic
                    first={first}
                    profilePic={profilePic}
                    toggleUploader={toggleUploader}
                />
                <BioEditor
                    first={first}
                    last={last}
                    bio={bio}
                    setBio={setBio}
                />
            </div>
        </div>
    );
}
