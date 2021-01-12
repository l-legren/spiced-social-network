const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/mysocial"
);

module.exports.areFriends = (otherId, loggedId) => {
    const q = `SELECT * FROM friendship
    WHERE (receiver_id = $1)
    AND (requester_id = $2)`;
    const params = [otherId, loggedId];

    return db.query(q, params);
};

module.exports.requestFriendship = (requester, receiver) => {
    const q = `INSERT INTO friendship(requester_id, receiver_id, friendship)
    VALUES ($1, $2, false) 
    RETURNING requester_id, receiver_id, friendship`;
    const params = [requester, receiver];

    return db.query(q, params);
};

module.exports.acceptRequest = (requester, receiver) => {
    const q = `UPDATE friendship
    SET friendship = true
    WHERE (requester_id = $1)
    AND (receiver_id = $2)`;
    const params = [requester, receiver];

    return db.query(q, params);
};

module.exports.unfriend = (requester, receiver) => {
    const q = `DELETE FROM friendship
    WHERE (requester_id = $1)
    AND (receiver_id = $2)`;
    const params = [requester, receiver];

    return db.query(q, params);
};