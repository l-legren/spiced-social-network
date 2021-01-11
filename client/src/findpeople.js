import { useState, useEffect } from "react";
import axios from "axios";

const FindPeople = () => {
    const [val, setVal] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Input:", val);
        (async () => {
            if (!val) {
                const { data } = await axios.get("get-most-recent-users");
                setUsers(data);
            } else {
                const { match } = await axios.get(`/users-match/${val}`);
                console.log(match);
            }
        })();
    },[]);

    

    return (
        <>
            <h2>`Find people in our community ${val}`</h2>
            <input
                type="text"
                placeholder="Enter name..."
                onChange={(e) => setVal(e.target.value)}
            ></input>
            <ul
                style={{
                    listStyleType: "none",
                    margin: 0,
                    padding: 0,
                    marginTop: 25,
                }}
            >
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
