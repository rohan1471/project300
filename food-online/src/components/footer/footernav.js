import React, { Component } from "react";
import { Card, CardBody, CardText, Col, Row } from "reactstrap";
class FooterNav extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#2F3037", height: "370px" }}>
                    <Row style={{ width: "1300px" }}>
                        <Col style={{ marginTop: "40px", marginLeft: "100px" }}>
                            <p style={{ color: "white", fontSize: "20px" }}>Follow Us</p>
                            <p style={{ color: "#999F9B" }}>We make consolidating, marketing and tracking <br />
                                your social media website easy.</p>
                            <Col style={{ textAlign: "left" }}>
                                <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f">
                                        <span>
                                            <img src="/assets/images/facebook.png" height="26px" alt="pic" />
                                        </span>
                                    </i>
                                </a>
                                <a href="https://www.linkedin.com" style={{ marginLeft: "20px", }}>
                                    <i className="fab fa-linkedin">
                                        <span>
                                            <img src="/assets/images/instagram.png" height="20px" alt="pic" />
                                        </span>
                                    </i>
                                </a>
                                <a href="https://www.twitter.com/" style={{ marginLeft: "20px", }}>
                                    <i className="fab fa-twitter">
                                        <span>
                                            <img src="/assets/images/twitter.png" height="20px" alt="pic" />
                                        </span>
                                    </i>
                                </a>
                            </Col>
                        </Col>
                        <Col  style={{ marginTop: "40px" }}>
                            <p style={{ color: "white", fontSize: "20px" }}>Download App</p>
                            <p style={{ color: "#999F9B" }}>Food Online App is now available on App Store & Google Play.
                                Get it now.</p>
                            <Row>
                                <Col>
                                    <img src="/assets/images/app1.png" alt="pic" />
                                </Col>
                                <Col>
                                    <img src="/assets/images/app1.png" alt="pic" />
                                </Col>
                            </Row>
                        </Col>
                        <Col  style={{ marginTop: "40px", }}>
                            <p style={{ color: "white", fontSize: "20px" }}>About The Store</p>
                            <p style={{ color: "#999F9B" }}>Our mission statement is to provide the absolute best customer experience available in the Food Delivery without exception.</p>
                            <Card style={{ backgroundColor: "#1F2024", borderColor: "red", width: "365px" }}>
                                <CardBody>
                                    <CardText>
                                        <Row>
                                            <Col md="3">
                                                <img src="/assets/images/download.png" alt="pic" />
                                            </Col>
                                            <Col>
                                                <small style={{ color: "#999F9B" }}>
                                                    Got Question? Call us 24/7!
                                                </small>
                                                <h4 style={{ color: "red", fontSize: "25px", }}>+001 123 456 789</h4>
                                            </Col>
                                        </Row>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <p style={{ color: "#999F9B", fontSize: "15px", marginTop: "10px" }}>

                                Address: Sylhet Street 68, Amoborkhana, Sylhet, BD
                                <br />
                                E-Mail: foodonline@gmail.com

                            </p>

                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: "#1F2024", height: "300px" }}>
                    <Row style={{paddingTop:"40px", paddingLeft:"40px"}}>
                        <Col md="3" style={{ textAlign: "center" }}>
                        <p style={{fontSize:"40px", fontWeight:"bold",textTransform:"uppercase", color:"white"}}>
                                Auburn
                            </p>
                            <p style={{ color: "white", textAlign:"left" }}>
                                We are commited to your satisfaction.
                                Get started today!
                            </p>
                        </Col>
                        <Col md="2">
                            <header style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>Quick Links</header>
                            <a href="/"><p style={{ fontSize: "18px", color: "white", marginTop: "20px" }}>Home</p></a>
                            <a href="/menu"><p style={{ fontSize: "18px", color: "white" }}>Menu</p></a>
                            <a href="/menu"><p style={{ fontSize: "18px", color: "white" }}>About</p></a>
                            <a href="/menu"><p style={{ fontSize: "18px", color: "white" }}>Contact</p></a>
                        </Col>
                        <Col md="2">
                            <header style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>Support</header>
                            <a href="/"><p style={{ fontSize: "18px", color: "white", marginTop: "20px" }}></p></a>
                            <a href="/"><p style={{ fontSize: "18px", color: "white" }}>Privacy policy</p></a>
                        </Col>
                        <Col md="2">
                            <header style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>Contact</header>
                            <Row style={{ marginTop: "20px" }}>
                                <Col md="1">
                                    <img src="/assets/images/location.png" height="20px" alt="pic" />

                                </Col>
                                <Col>
                                    <a href="/"><p style={{ fontSize: "14px", color: "white" }}>Sylhet, BD</p></a>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <img src="/assets/images/call.png" height="20px" alt="pic" />

                                </Col>
                                <Col>
                                    <a href="/"><p style={{ fontSize: "14px", color: "white" }}>+8801709882..</p></a>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <img src="/assets/images/email.png" height="20px" alt="pic" />

                                </Col>
                                <Col>
                                    <a href="/"><p style={{ fontSize: "14px", color: "white" }}>support@gmail.com</p></a>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="3">
                            <header style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>Follow Us</header>
                            <Row style={{ marginTop: "20px", }}>

                                <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f">
                                        <span>
                                            <img src="/assets/images/facebook.png" height="26px" alt="pic" />
                                        </span>
                                    </i></a>

                                <a href="https://www.linkedin.com" style={{ marginTop: "20px", }}>
                                    <i className="fab fa-linkedin">
                                        <span>
                                            <img src="/assets/images/instagram.png" height="20px" alt="pic" />
                                        </span>
                                    </i>
                                </a>
                                <a href="https://www.twitter.com/" style={{ marginTop: "20px", }}>
                                    <i className="fab fa-twitter">
                                        <span>
                                            <img src="/assets/images/twitter.png" height="20px" alt="pic" />
                                        </span>
                                    </i>
                                </a>
                            </Row>

                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: "#2F3037", height: "70px" }}>
                    <p className="container" style={{ fontSize: "20px", textAlign: "center", color: "#999F9B", paddingTop: "20px" }}>Copyright © <small style={{ color: "red", fontSize: "20px" }}>Food Online</small>. all rights reserved.</p>
                </div>
            </div>
        );
    }
}
export default FooterNav;