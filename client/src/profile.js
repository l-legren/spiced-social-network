import BioEditor from "./bioeditor";
import ProfilePic from "./profilepic";

export default function Profile({ first, last, profilePic, bio }) {
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
            />
        </div>
    );
}
