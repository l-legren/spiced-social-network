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
}