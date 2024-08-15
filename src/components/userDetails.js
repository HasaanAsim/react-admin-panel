import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

const UserDetails = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: 'row',
            }}
        >
            <div style={{
                display: 'flex',
                flex: 1
            }}>
                <Sidebar />
            </div>
            <div style={{
                display: "flex",
                flex: 3.5,
                flexDirection: 'column',
                padding: "20px",
                marginRight: '2%'
            }}
                className="shadow-sm"
            >

                <div
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        padding: "10px"

                    }}
                >
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        position: 'relative'

                        }}>
                        <h4 style={{
                            width:'150px',
                        }}>
                            View User
                        </h4>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 4,
                        justifyContent: 'flex-end',
                        gap: '20px'
                    }}>
                        <Button style={{width:'100px',fontWeight: 'bold', fontSize: '12px' }} variant="primary">Update user</Button>
                        <Button style={{width:'100px',fontWeight: 'bold', fontSize: '12px' }} variant="danger">Delete User</Button>
                    </div>
                </div>

                <Row>
                        <Col md={5}>
                    <Form.Group controlId="formBasicUserId">
                        <Form.Label>User Id</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formUserEmail">
                        <Form.Label>User Email</Form.Label>
                            <Form.Control type="email" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formBasicDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formLocation">
                        <Form.Label >Location</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formWebURL">
                        <Form.Label >Web URL</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formBio">
                        <Form.Label>Bio</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formOccupation">
                        <Form.Label >Occupation</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formInstagramId">
                        <Form.Label >Instagram Id</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formMembershipType">
                        <Form.Label>Membership Type</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={7}>
                    <Form.Group controlId="formUserStatus">
                        <Form.Label>User Status</Form.Label>
                            <Form.Control type="text" />
                    </Form.Group>
                        </Col>

                        <Col md={5}>
                    <Form.Group controlId="formSponsoredUser">
                        <Form.Label>Sponsored User</Form.Label>
                            <Form.Check type="checkbox" />
                    </Form.Group>
                        </Col>

                </Row>
            </div>
        </div>
    )
}
export default UserDetails;