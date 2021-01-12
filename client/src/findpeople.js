import { useState, useEffect } from "react";
import axios from "axios";

const FindPeople = () => {
    const [val, setVal] = useState("");
    const [users, setUsers] = useState([]);
    const [noMatches, setNoMatches] = useState(false);

    useEffect(() => {
        console.log("Input:", val);
        let abort;
        setNoMatches(false);
        (async () => {
            if (!val) {
                const { data } = await axios.get("get-most-recent-users");
                if (!abort) {
                    setUsers(data);
                }
            } else {
                const { data } = await axios.get(`/users-match/${val}`);
                if (data.length >= 1) {
                    if (!abort) {
                        setUsers(data);
                    }
                } else {
                    setNoMatches(true);
                }
            }
        })();
        return () => {
            abort = true;
        };
    }, [val]);

    

    return (
        <>
            <h2>{`Find people in our community`}</h2>
            <input
                id="find-users"
                type="text"
                placeholder="Enter name..."
                onChange={(e) => setVal(e.target.value)}
            ></input>
            { !noMatches ? (
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
                                <h2>{`${user.first} ${user.last}`}</h2>
                            </a>
                        </li>
                    ))}
                </ul>
            )
                : <>
                    <h2>
                        SORRY, NO MATCHES FOR <span style={{color: "red"}}>{val.toUpperCase()}</span>
                    </h2>
                </>}
        </>
    );
};

export default FindPeople;
