const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
process.env.NODE_ENV === "production"
    ? (secrets = process.env)
    : (secrets = require("./secrets"));
const cookieSession =  require("cookie-session");
const db = require("./db.js");
// csurf create tokens in the requests objects!!
const csurf = require("csurf");
const { hash, compare } = require("./bc.js");


// MIDDLEWARE

app.use(express.json());

app.use(
    cookieSession({
        secret: "I am an hungry man",
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));


// ROUTES!

// app.get("/welcome", (req, res) => {
//     if (req.session.userId) {
//         res.redirect("/");
//     } else {
//         res.sendFile(path.join(__dirname, "..", "client", "index.html"));
//     }
// });


app.post("/registration", (req, res) => {
    console.log(req.body);
    const { first, last, email, password } = req.body;
    hash(password)
        .then((hash) => {
            console.log(hash);
            return db.addUser(first, last, email, hash)
                .then(({rows}) => {
                    req.session.userId = rows[0].id;
                    res.json({
                        success: true
                    });
                    console.log("req.session set");
                })
                .catch((err) => {
                    console.log("Error adding to database: ", err);
                    res.json({
                        success: false
                    });
                });
        })
        .catch((err) => console.log("Error hashing the password for database: ", err));
});

app.post("/login", (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    db.getPassword(email)
        .then(({rows}) => {
            const hashedPsw = rows[0].password;
            compare(password, hashedPsw)
                .then((booleanResult) => {
                    if (booleanResult) {
                        req.session.userId = rows[0].id;
                        res.json({
                            success: true
                        });
                    }
                }).catch((err) => {
                    console.log("Error logging: ", err);
                    res.json({
                        success: false
                    });
                });
        });
});

// NEVER COMMENT OUT THIS LINE OF CODE!!!
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});