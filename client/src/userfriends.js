import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "./actions";

const UserFriends = ({ id }) => {
    const dispatch = useDispatch();
    const userFriends = useSelector(state => state.friends);

    useEffect(() => {
        (async () => {
            dispatch(getFriends(id));
        })();
    }, []);
    
    console.log(userFriends);

    return (
        <>
            <div className="friends-page" id="friends">
                <h2>Friends</h2>
                <ul>
                    {userFriends.map((friend) => {
                        <li>
                            <h3>{friend.first}</h3>;
                        </li>;
                    })}
                </ul>;
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
