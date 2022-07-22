import React, { Component } from "react";
import { Row, Col, FormGroup, Input, Form, Button } from 'reactstrap'
class Checkout extends Component {
    render() {
        return (
            <div className="container my-3">
                <div>
                    <p style={{ color: "red", fontSize: "25px" }}>
                        Checkout
                    </p>
                </div>
                <Row>
                    <Col md="6">
                        <div className="shadow p-5 bg-white">
                            <div className="container" style={{ marginLeft: "25px" }}>
                                <p style={{ color: "red", fontSize: "20px" }}>
                                    Billing details
                                </p>
                                <hr />
                                <Form>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <Row>
                                                    <label for="name" style={{ fontSize: "14px" }}>
                                                        First Name<em style={{ color: "red" }}>*</em>
                                                    </label>
                                                    <Input
                                                        id="fname"
                                                        name="fname"
                                                        type="text"
                                                        placeholder=""
                                                        // value={this.state.fname}
                                                        style={{ height: "40px" }}
                                                    // onChange={this.handleInputChange}
                                                    />
                                                </Row>
                                            </FormGroup>
                                        </Col> <br />
                                        <Col md="5">
                                            <FormGroup>
                                                <Row>
                                                    <label for="lname" style={{ fontSize: "14px" }}>
                                                        Last Name<em style={{ color: "red" }}>*</em>
                                                    </label>
                                                    <Input
                                                        id="lname"
                                                        name="lname"
                                                        type="text"
                                                        placeholder=""
                                                        // value={this.state.fname}
                                                        style={{ height: "40px" }}
                                                    // onChange={this.handleInputChange}
                                                    />
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <Row>
                                                    <label for="name" style={{ fontSize: "14px" }}>
                                                        Phone Number<em style={{ color: "red" }}>*</em>
                                                    </label>
                                                    <Input
                                                        id="name"
                                                        name="fname"
                                                        type="text"
                                                        placeholder=""
                                                        // value={this.state.fname}
                                                        style={{ height: "40px" }}
                                                    // onChange={this.handleInputChange}
                                                    />
                                                </Row>
                                            </FormGroup>
                                        </Col> <br />
                                        <Col md="5">
                                            <FormGroup>
                                                <Row>
                                                    <label for="email" style={{ fontSize: "14px" }}>
                                                        Email address<em style={{ color: "red" }}>*</em>
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="text"
                                                        placeholder=""
                                                        // value={this.state.fname}
                                                        style={{ height: "40px" }}
                                                    // onChange={this.handleInputChange}
                                                    />
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                        <FormGroup>
                                            <Row>
                                                <label for="address" style={{ fontSize: "14px" }}>
                                                    Address<em style={{ color: "red" }}>*</em>
                                                </label>
                                                <Input
                                                    id="address"
                                                    name="address"
                                                    type="text"
                                                    placeholder=""
                                                    // value={this.state.fname}
                                                    style={{ height: "40px", width: "400px" }}
                                                // onChange={this.handleInputChange}
                                                />
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <label for="address1" style={{ fontSize: "14px" }}>
                                                    Address (optional)<em style={{ color: "red" }}>*</em>
                                                </label>
                                                <Input
                                                    id="address1"
                                                    name="address1"
                                                    type="text"
                                                    placeholder=""
                                                    // value={this.state.fname}
                                                    style={{ height: "40px", width: "400px" }}
                                                // onChange={this.handleInputChange}
                                                />
                                            </Row>
                                        </FormGroup>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="shadow p-5 bg-white">
                            <div className="container" style={{ marginLeft: "25px" }}>
                                <p style={{ color: "red", fontSize: "20px" }}>Your Order</p>
                                <Row>
                                    <Col md="3">
                                        <p><b>
                                            Product
                                        </b>

                                        </p>
                                    </Col>
                                    <Col>
                                        <p> <b>
                                            Product Name
                                        </b></p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col md="3">
                                        <p><b>
                                            Total
                                        </b>

                                        </p>
                                    </Col>
                                    <Col>
                                        <p><b>Total amount</b> </p>
                                    </Col>
                                </Row><hr />
                                <Row>
                                    <Col md="3">
                                        <p><b>
                                            Subtotal
                                        </b>

                                        </p>
                                    </Col>
                                    <Col>
                                        <p> <b>Subtotal amount</b></p>
                                    </Col>
                                </Row><hr />
                                <Row>
                                    <Col md="3">
                                        <p>
                                            <b>
                                                Shipping
                                            </b>

                                        </p>
                                    </Col>
                                    <Col>
                                        <p> <b>Enter your address to view <br /> shipping options.</b></p>
                                    </Col>
                                </Row><hr />
                                <Row>
                                    <Col md="3">
                                        <p>
                                            <strong>
                                                Total
                                            </strong>
                                        </p>
                                    </Col>
                                    <Col>
                                        <p> <b>Total amount</b></p>
                                    </Col>
                                </Row><hr />
                                <div>
                                    <p style={{ color: "red", fontSize: "20px" }}>Select Payment Method</p>
                                    <a href="/">
                                        <p style={{ color: "black", fontSize: "15px" }}>Direct bank transfer</p>
                                    </a>
                                    <a href="/">
                                        <p style={{ color: "black", fontSize: "15px" }}>Save bkash Account</p>
                                    </a>
                                    <a href="/">
                                        <p style={{ color: "black", fontSize: "15px" }}>Rocket</p>
                                    </a>
                                    <a href="/">
                                        <p style={{ color: "black", fontSize: "15px" }}>Cash On Delivery</p>
                                    </a>
                                </div>
                                <a href="/">
                                    <Button color="danger" outline size="lg">
                                    Place Order
                                </Button>
                                </a>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Checkout;