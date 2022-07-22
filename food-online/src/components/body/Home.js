import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap'
class Home extends Component {

    render() {

        const centered = {
            color: "white",
            position: "absolute",
            top: "40%",
            left: "31%",
            fontSize: "70px",
            fontWeight: "bold",
            textTransform: "uppercase",
        }
        const centered1 = {
            color: "white",
            position: "absolute",
            top: "55%",
            left: "41%",
            fontSize: "70px",
            textTransform: "uppercase",
            fontWeight: "bold",
        }
        const centered3 = {
            color: "white",
            position: "absolute",
            top: "75%",
            left: "28%",
            fontSize: "30px",
            textTransform: "uppercase"
        }
        const centered2 = {
            color: "white",
            position: "absolute",
            top: "175%",
            left: "31%",
            fontSize: "65px",
            fontWeight: "bold",
            textTransform: "uppercase",
        }
        const centered4 = {
            color: "white",
            position: "absolute",
            top: "195%",
            left: "23%",
            fontSize: "19px",
            textAlign: "center"
        }
        return (
            <div>
                <div style={{ backgroundImage: 'url("/assets/images/background.jpg")', height: "630px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div>
                        <p style={centered}>Inspired Thai </p>

                        <p style={centered1}>Cuisine</p>
                        <p style={centered3}>Voted Sylhrt Best Thai Restaurant</p>
                        <a href="/contactus">
                        </a>
                    </div>
                </div>
                <div>
                    <p style={{ textAlign: "center", fontSize: "45px", fontWeight: "bold" }}>
                        A DESTINATION
                    </p>
                    <p style={{ textAlign: "center", fontSize: "17px", }}>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis<br />
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis <br />
                        ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                    <div style={{ backgroundImage: 'url("/assets/images/eat.jpg")', marginTop: "130px", height: "630px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                        <p style={centered2}>
                            Eat Together
                        </p>
                        <p style={centered4}>
                            Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour – <br />dessert.
                        </p>
                    </div>
                    <div className="container my-3">
                        <Row style={{ marginTop: "120px" }}>
                            <Col>
                                <Row>
                                    <img src="/assets/images/IMG_4739.jpg" height="200px" alt="pic" />
                                    <p style={{ fontWeight: "bold", marginTop: "30px" }}>
                                        CRAFTED IN THE KITCHEN
                                    </p>
                                    <p style={{ color: "balck" }}>
                                        Cras mattis consectetur purus sit amet<br />
                                        fermentum. Sed posuere consectetur <br />
                                        est at lobortis. Cras justo odio, dapibus<br />
                                        ac facilisis in, egestas eget quam. Sed<br />
                                        posuere consectetur est at lobortis.<br />
                                        Maecenas faucibus mollis interdum. <br />
                                        Nulla vitae elit libero a pharetra<br />
                                    </p>
                                </Row>

                            </Col>
                            <Col>
                                <Row>
                                    <img src="/assets/images/IMG_4508+(1).jpg" height="200px" alt="pic" />
                                    <p style={{ fontWeight: "bold", marginTop: "30px" }}>
                                        FRESH INGREDIENTS
                                    </p>
                                    <p style={{ color: "balck" }}>
                                        Cras mattis consectetur purus sit amet<br />
                                        fermentum. Sed posuere consectetur <br />
                                        est at lobortis. Cras justo odio, dapibus<br />
                                        ac facilisis in, egestas eget quam. Sed<br />
                                        posuere consectetur est at lobortis.<br />
                                        Maecenas faucibus mollis interdum. <br />
                                        Nulla vitae elit libero a pharetra<br />
                                    </p>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <img src="/assets/images/IMG_5157.jpg" height="200px" alt="pic" />
                                    <p style={{ fontWeight: "bold", marginTop: "30px" }}>
                                        MASTER CHEF
                                    </p>
                                    <p style={{ color: "balck" }}>
                                        Cras mattis consectetur purus sit amet<br />
                                        fermentum. Sed posuere consectetur <br />
                                        est at lobortis. Cras justo odio, dapibus<br />
                                        ac facilisis in, egestas eget quam. Sed<br />
                                        posuere consectetur est at lobortis.<br />
                                        Maecenas faucibus mollis interdum. <br />
                                        Nulla vitae elit libero a pharetra<br />
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                        <Button href="/menu" color="dark" outline size="lg" style={{ borderBottomRightRadius: "20px", borderTopLeftRadius: "20px" }}>
                            View Menu
                        </Button>
                    </div>
                    <div style={{ backgroundImage: 'url("/assets/images/5.jpg")', marginTop: "130px", height: "620px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                        <p style={{
                            textAlign: "center",
                            paddingTop: "255px",
                            color: "white",
                            fontSize: "70px",
                            fontWeight: "bold"
                        }}>
                            THE KITCHEN
                        </p>
                    </div>
                    <div className="container my-3">
                        <Row style={{ marginTop: "70px" }}>
                            <Col>
                                <Row>
                                    <p style={{ fontWeight: "bold", marginTop: "30px", fontSize: "30px" }}>
                                        LIZ GRISAITIS
                                    </p>
                                    <p style={{ fontWeight: "bold", marginTop: "30px" }}>
                                        Executive Chef
                                    </p>
                                    <p style={{ color: "balck" }}>
                                        vel eu leo. Curabitur blandit tempus <br />
                                        porttitor. Curabitur blandit tempus <br />
                                        porttitor. Fusce dapibus, tellus ac cursus<br />
                                        commodo, tortor mauris condimentum<br />
                                        nibh, ut fermentum massa justo sit amet<br />
                                        risus. Lorem ipsum dolor sit amet,<br />
                                        consectetur adipiscing elit.<br />
                                    </p>
                                </Row>

                            </Col>
                            <Col>
                                <Row>
                                    <p style={{ fontWeight: "bold", marginTop: "30px", fontSize: "30px" }}>
                                        MATTEO CAPON
                                    </p>
                                    <p style={{ fontWeight: "bold", marginTop: "30px" }}>
                                        Chef De Cuisine
                                    </p>
                                    <p style={{ color: "balck" }}>
                                        vel eu leo. Curabitur blandit tempus <br />
                                        porttitor. Curabitur blandit tempus <br />
                                        porttitor. Fusce dapibus, tellus ac cursus<br />
                                        commodo, tortor mauris condimentum<br />
                                        nibh, ut fermentum massa justo sit amet<br />
                                        risus. Lorem ipsum dolor sit amet,<br />
                                        consectetur adipiscing elit.<br />
                                    </p>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <p style={{ fontWeight: "bold", marginTop: "30px", fontSize: "30px" }}>
                                        ANGIE WALSH
                                    </p>
                                    <p style={{ fontWeight: "bold", marginTop: "30px" }}>
                                        Pastry Chef
                                    </p>
                                    <p style={{ color: "balck" }}>
                                        Nullam quis risus eget urna mollis ornare<br />
                                        vel eu leo. Curabitur blandit tempus <br />
                                        porttitor. Curabitur blandit tempus <br />
                                        porttitor. Fusce dapibus, tellus ac cursus<br />
                                        commodo, tortor mauris condimentum<br />
                                        nibh, ut fermentum massa justo sit amet<br />
                                        risus. Lorem ipsum dolor sit amet,<br />
                                        consectetur adipiscing elit.<br />
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div align="center">
                    <img src="/assets/images/IMG_4431.jpg" alt="pic" />
                </div>
            </div>
        );
    }
}
export default Home;