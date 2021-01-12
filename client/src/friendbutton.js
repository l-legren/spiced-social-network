import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";

const FriendButton = ({otherFirst, otherLast, otherPic, otherId}) => {

    const [friendStatus, setFriendStatus] = useState("unfriend");

    console.log(otherFirst, otherLast);

    useEffect(() => {
        console.log(`This is the actual friend status with ${otherId}`, friendStatus);
    }, [otherId]);
    
    const handleClick = () => {
        console.log("clicking on request");
    };

    return (
        <>
            {otherId}
            <Button variant="outline-primary" onClick={handleClick}>Friend Request</Button>
        </>
    );
};
 
export default FriendButton;