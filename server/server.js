const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
process.env.NODE_ENV === "production"
    ? (secrets = process.env)
    : (secrets = require("./secrets"));
const cookieSession =  require("cookie-session");
const { addSigner } = require("/db.js");
import { hash } from "bcryptjs";
import Welcome from "./welcome";

app.use(express.json());

app.use(
    cookieSession({
        secret: secrets.cookieSession,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

// DONT KNOW IF I NEED THIS HERE
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        req.redirect("/");
    } else {
        res.sendFile(path.join(__dirname, "..", "client", "index.html");
    }
});

app.post("/registration", (req, res) => {
    console.log(req.body);
    const { first, last, email, password } = req.body;
    hash(password)
        .then((hash) => {
            return addUser(first, last, email, password)
                .then(({rows}) => {
                    req.session.userId = rows[0].id
                })
            });
});



// NEVER COMMENT OUT THIS LINE OF CODE!!!
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});

// app.post("/register", (req, res) => {
//     const { first, last, email, password } = req.body;
//     hash(password)
//         .then((hash) => {
//             return addSignUp(first, last, email, hash)
//                 .then(({ rows }) => {
//                     req.session.userId = rows[0].id;
//                     if (req.session.error) {
//                         req.session.error = null;
//                     }
//                     res.redirect("/profile");
//                 })
//                 .catch(({ detail }) => {
//                     console.log(detail);
//                     req.session.error = detail;
//                     res.redirect("/register");
//                 });
//         })
//         .catch((err) => console.log(err));
// });