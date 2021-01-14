import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "./actions";

const UserFriends = ({id}) => {
    const dispatch = useDispatch();
    const friends = useSelector(
        state => state.friends && state.friends
    );

    useEffect(() => {
        (async () => {
            console.log(id);
            dispatch(getFriends(id));
        })();
    }, []);

    return (
        <>
            <div className="friends-page" id="friends">
                <h2>Friends</h2>
            </div>
            <div className="friends-page" id="requesters">
                <h2>Requesters</h2>
            </div>
            <div className="friends-page" id="my-requests">
                <h2>Open Requests</h2>
            </div>
        </>
    );
};

export default UserFriends;
