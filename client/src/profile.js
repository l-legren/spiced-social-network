import BioEditor from "./bioeditor";
import ProfilePic from "./profilepic";

export default function Profile(props) {
    console.log("This are my props: ", props);
    return (
        <div>
            <h1>USER PROFILE COMPONENT</h1>
            {/* <ProfilePic /> */}
            <BioEditor />
        </div>
    );
}
