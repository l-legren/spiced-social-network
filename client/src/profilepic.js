import { Component } from "react";

export default function ProfilePic({ profilePic, toggleUploader }) {
    return (
        <div>
            <img
                onClick={() => toggleUploader()}
                src="/default.jpg"
                alt="default profile picture"
            ></img>
        </div>
    );
}
