import React from "react";
import { Row, Col } from 'reactstrap'
const About = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url("/assets/images/IMG_3616.jpg")', height: "630px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <div>
                    <p style={{ paddingTop: "270px", textAlign: "center", color: "white", fontSize: "80px", fontWeight: "bold" }}>ABOUT</p>
                </div>
            </div>
            <div className="container my-6">
                <p style={{ paddingTop: "30px",textAlign: "center",fontSize: "50px", fontWeight: "bold" }}>LOCATION</p>
                <Row style={{ marginTop: "120px" }}>
                    <Col>
                        <Row>
                            <p style={{ fontWeight: "bold", textTransform:"uppercase" }}>
                                Airport
                            </p>
                            <p style={{ color: "balck", textTransform:"uppercase" }}>
                                Airport Road<br />
                                Sylhet 3101
                            </p>
                            <p style={{ color: "balck" }}>
                                (555) 555-5555<br />
                                email@example.com
                            </p>
                            <p style={{ color: "balck" }}>
                                Monday - Sunday<br/>
                                10am – 10pm
                            </p>
                        </Row>

                    </Col>
                    <Col>
                        <Row>
                            <p style={{ fontWeight: "bold",textTransform:"uppercase" }}>
                            Bateshwar
                            </p>
                            <p style={{ color: "balck", textTransform:"uppercase" }}>
                                Tamabil Hwy,<br />
                                Sylhet 3101
                            </p>
                            <p style={{ color: "balck" }}>
                                (555) 555-5555<br />
                                email@example.com
                            </p>
                            <p style={{ color: "balck" }}>
                                Monday - Sunday<br/>
                                10am – 10pm
                            </p>

                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p style={{ color: "balck" }}>
                            <p style={{ fontWeight: "bold", textTransform:"uppercase" }}>
                            zindabazar
                            </p>
                            <p style={{ color: "balck",textTransform:"uppercase" }}>
                            zindabazar Point<br />
                                Sylhet 3101
                            </p>
                            <p style={{ color: "balck" }}>
                                (555) 555-5555<br />
                                email@example.com
                            </p>
                            <p style={{ color: "balck" }}>
                                Monday - Sunday<br/>
                                10am – 10pm
                            </p>
                            </p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>

    );
}
export default About;