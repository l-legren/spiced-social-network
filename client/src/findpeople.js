import { FormControlLabel } from "@material-ui/core";

import { Component, useState, useEffect } from 'react';
import axios from "axios";

const FindPeople = () => {
    
    const [first, setFirst] = useState("");
    // const [last, setLast] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {

        (async () => {
            const {data} = await axios.get("get-most-recent-users");
            console.log("Thats the data from server: ", data);
            setUsers(data);
        })();

    }, []);


    return (
        <>
            <h2>Find last people who join our community</h2>
            <input type="input" placeholder="Enter name..."></input>
        </>
    );
};
 
export default FindPeople;