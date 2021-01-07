import BioEditor from "./bioeditor";
import ProfilePic from "./profilepic";

export default function Profile({ first, last, profilePic, bio, setBio }) {
    // console.log("These are my props: ", props);
    return (
        <div>
            <h1>USER PROFILE COMPONENT</h1>
            <ProfilePic 
                first={first}
                profilePic={profilePic}
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
