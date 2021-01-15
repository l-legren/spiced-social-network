import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriend, getFriends, getRequesters, removeFriend } from "./actions";
import { Button } from "react-bootstrap";
// import reducer from './reducer';

const UserFriends = ({ id }) => {
    const dispatch = useDispatch();
    const userFriends = useSelector((state) => state.friends);
    const userRequesters = useSelector((state) => state.requestsToUser);
    const openRequests = useSelector((state) => state.requestsFromUser);

    useEffect(() => {
        (async () => {
            dispatch(getFriends(id));
            dispatch(getRequesters(id));
        })();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        let splittedURL = e.target.parentNode.parentNode.href.split('/');
        let userInUrl = splittedURL[splittedURL.length-1];
        return e.target.innerText == 'Accept' ? dispatch(acceptFriend(userInUrl))
            : dispatch(removeFriend(userInUrl));
    };

    const stateOfFriendship = (stateOfFriendship) => {
        const textButton = (type) => {
            return type == userFriends
                ? "Unfriend"
                : type == userRequesters ? "Accept" : "Cancel";
        };

        return (
            <div>
                <ul className="friends-page" style={{ paddingLeft: 0 }}>
                    {(stateOfFriendship || []).map((user, idx) => {
                        return (
                            <>
                                <a href={`/user/${user.id}`}>
                                    <li key={idx}>
                                        <h4>{user.first}</h4>
                                        <img
                                            src={user.profile_pic}
                                            alt={user.first}
                                            style={{ width: 100, height: 100 }}
                                        ></img>
                                        <Button onClick={(e) =>handleClick(e)}>
                                            {textButton(stateOfFriendship)}
                                        </Button>
                                    </li>
                                </a>
                            </>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <>
            <div>
                <h2>Friends</h2>
                <div className="divisory"></div>
                {stateOfFriendship(userFriends)}
            </div>
            <div>
                <h2>Requesters</h2>
                <div className="divisory"></div>
                {stateOfFriendship(userRequesters)}
            </div>
            <div>
                <h2>Open Requests</h2>
                <div className="divisory"></div>
                {stateOfFriendship(openRequests)}
            </div>
        </>
    );
};

export default UserFriends;
