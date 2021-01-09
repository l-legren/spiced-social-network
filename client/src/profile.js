import BioEditor from "./bioeditor";
import ProfilePic from "./profilepic";

export default function Profile({ first, last, profilePic, bio, setBio, toggleUploader }) {
    // console.log("These are my props: ", props);
    return (
        <div className="profile-section">
            <h1>USER PROFILE COMPONENT</h1>
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
    );
}
