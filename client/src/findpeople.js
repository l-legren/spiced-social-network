import { FormControlLabel } from "@material-ui/core";

import { Component, useState, useEffect } from "react";
import axios from "axios";

const FindPeople = () => {
    const [first, setFirst] = useState("");
    // const [last, setLast] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("get-most-recent-users");
            setUsers(data);
        })();
    }, []);

    return (
        <>
            <h2>Find people in our community</h2>
            <input type="input" placeholder="Enter name..."></input>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0, marginTop: 25 }}>
                {users.map((user, idx) => (
                    <li key={idx}>
                        <a href={`/user/${user.id}`}>
                            <img
                                style={{ width: 50, height: 50 }}
                                src={user.profile_pic}
                                alt={`Photo of ${user.first} ${user.last}`}
                            ></img>
                            {`${user.first} ${user.last}`}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FindPeople;
