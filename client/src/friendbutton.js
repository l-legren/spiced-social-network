import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import axios from "axios";
import instance from "./axios";

const FriendButton = ({ otherId }) => {
    const [friendStatus, setFriendStatus] = useState("No Friends");
    const [textButton, setTextButton] = useState("");

    useEffect(() => {
        (async () => {
            definingTextbutton(friendStatus);
            try {
                const { data } = await instance.get(`/friend-request/${otherId}`);
                if (data.length < 1) {
                    setFriendStatus(TEXT_BUTTON.NO_FRIENDS);
                } else {
                    if (data[0].friendship) {
                        setFriendStatus(TEXT_BUTTON.FRIENDS);
                    } else {
                        setFriendStatus(TEXT_BUTTON.PENDING_REQUEST);
                    }
                }
            } catch {
                (err) =>
                    console.log("Error requesting info about friendship", err);
            }
        })();
    }, [friendStatus, textButton]);

    const handleClick = () => {
        (async () => {
            try {
                const { data } = await instance.post("/change-status", {
                    otherUserId: otherId,
                    status: friendStatus,
                });
                console.log("Data Response from the server: ", data);
                if (data.status == TEXT_BUTTON.NO_FRIENDS) {
                    setFriendStatus(TEXT_BUTTON.NO_FRIENDS);
                } else if (data.status == TEXT_BUTTON.PENDING_REQUEST) {
                    setFriendStatus(TEXT_BUTTON.PENDING_REQUEST);
                } else if (data.status == TEXT_BUTTON.FRIENDS) {
                    setFriendStatus(TEXT_BUTTON.FRIENDS);
                }
            } catch {
                console.log((err) =>
                    console.log("Error handling request: ", err)
                );
            }
        })();
    };

    const definingTextbutton = (status) => {
        if (status == TEXT_BUTTON.NO_FRIENDS) {
            setTextButton("Send Friend Request!");
        } else if (status == TEXT_BUTTON.FRIENDS) {
            setTextButton("Unfriend!");
        } else if (status == TEXT_BUTTON.PENDING_REQUEST) {
            setTextButton("Request sent!");
        }
    };

    return (
        <>
            <Button variant="outline-primary" onClick={handleClick}>
                {textButton}
            </Button>
        </>
    );
};

export default FriendButton;

const TEXT_BUTTON = {
    NO_FRIENDS: "No friends",
    FRIENDS: "Friends",
    PENDING_REQUEST: "Pending request",
};
