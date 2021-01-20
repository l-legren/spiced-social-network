import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./actions";

const NavBar = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.userInfo || {});

    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    return (
        <Navbar
            bg="dark"
            style={{ display: "flex", justifyContent: "space-between" }}
        >
            <Navbar.Brand
                href="#home"
                style={{ marginLeft: 50, color: "white" }}
            >
                mySocial
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav style={{ marginRight: 50 }}>
                <Nav.Link href="./users" style={{ color: "white" }}>
                    Find users
                </Nav.Link>
                <Nav.Link href={`./friends/${profile.id}`} style={{ color: "white" }}>
                    Friends
                </Nav.Link>
                <Nav.Link href="./chatroom" style={{ color: "white" }}>
                    Chatroom
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
