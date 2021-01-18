const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/mysocial"
);

module.exports.newMessage = (id, message) => {
    const q = `INSERT INTO chat_messages`;
    const params = [id, message];

    return db.query(q, params);
};

module.exports.getTenMostRecentMessages = () => {
    const q = `SELECT first, last, profile_pic, timestamp, message 
    FROM users
    LEFT OUTER JOIN chat_messages 
    ON (users.id = chat_messages.user_id)
    WHERE message IS NOT NULL 
    ORDER BY timestamp DESC
    LIMIT 10`;
    const params = [];

    return db.query(q, params);
};
