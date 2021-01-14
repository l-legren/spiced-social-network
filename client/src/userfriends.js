import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, getRequesters, getOpenRequest } from "./actions";
// import reducer from './reducer';

const UserFriends = ({ id }) => {
    const dispatch = useDispatch();
    const userFriends = useSelector((state) => state.friends);
    const userRequesters = useSelector((state) => state.requests);

    useEffect(() => {
        (async () => {
            dispatch(getFriends(id));
            dispatch(getRequesters(id));
        })();
    }, []);

    return (
        <>
            <div className="friends-page" id="friends">
                <h2>Friends</h2>
                <div className="divisory"></div>
                <ul style={{ paddingLeft: 0 }}>
                    {(userFriends || []).map((friend, idx) => {
                        return (
                            <>
                                <a href={`/user/${friend.id}`}>
                                    <li key={idx}>
                                        <h3>{friend.first}</h3>
                                        <img
                                            src={friend.profile_pic}
                                            alt={friend.first}
                                            style={{ width: 100, height: 100 }}
                                        ></img>
                                    </li>
                                </a>
                            </>
                        );
                    })}
                </ul>
            </div>
            <div className="friends-page" id="requesters">
                <h2>Requesters</h2>
                <div className="divisory"></div>
                <ul style={{ paddingLeft: 0 }}>
                    {(userRequesters || []).map((requester, idx) => {
                        return (
                            <>
                                <a href={`/user/${requester.id}`}>
                                    <li key={idx}>
                                        <h3>{requester.first}</h3>
                                        <img
                                            src={requester.profile_pic}
                                            alt={requester.first}
                                            style={{ width: 100, height: 100 }}
                                        ></img>
                                    </li>
                                </a>
                            </>
                        );
                    })}
                </ul>
            </div>
            <div className="friends-page" id="my-requests">
                <h2>Open Requests</h2>
                <div className="divisory"></div>
            </div>
        </>
    );
};

export default UserFriends;
