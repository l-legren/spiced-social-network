import { useState, useEffect } from "react";

import ProfilePic from "./profilepic";
import Logout from "./logout";
import Logo from "./logo";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./actions";
import { Col, Row, Container, Button } from "react-bootstrap";

const Header = ({ toggleUploader, profilePic }) => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.userInfo || {});

    useEffect(() => {
        // dispatch(updatePhoto(newPic));
        dispatch(getUserInfo());
    }, [profile.profile_pic]);

    return (
        <div className="nav-top">
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <a href='/' style={{textDecoration:'none', color: 'black'}}><Logo /></a>
                    </Col>
                    <Col xs={6} sm={0} md={3} lg={3}></Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <div id="nav-top-image">
                            <div id="name-logout">
                                <div id="name-log-wrapper">
                                    {<h2>{profile.first}</h2>}
                                </div>
                                <div id="logout-wrapper">
                                    <Logout />
                                </div>
                            </div>
                            <ProfilePic
                                toggleUploader={toggleUploader}
                                profilePic={profilePic}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
