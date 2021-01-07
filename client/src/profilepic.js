export default function ProfilePic({ profilePic, toggleUploader, first }) {
    console.log("ProfilePic in Component:", profilePic);
    return (
        <>
            { profilePic && (
                <img
                    // style={{ width: 300, height: 300}}
                    onClick={() => toggleUploader()}
                    src={profilePic}
                    alt={first}
                ></img>
            )}
            { !profilePic && (
                <img
                    onClick={() => toggleUploader()}
                    src="/default.jpg"
                    alt={first}
                ></img>
            )}
        </>
    );
}
