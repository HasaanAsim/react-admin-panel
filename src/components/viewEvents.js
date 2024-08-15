import React from "react";
import { Card, Table, Container, Row, Col, Form } from "react-bootstrap";
import Sidebar from "./sidebar";
import "./viewEvents.css";

const ViewEvents = () => {
    return (
        <div className="d-flex">
            <div style={{
                display: "flex",
                flex: 1
            }}>
                <Sidebar />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',
                    flex: 3.5,

                }}
                className="shadow-sm">
                <div style={{
                    display: 'flex',
                    flex: 1,
                    marginTop: '20%'
                }}>
                    <h1>View Events</h1>
                </div>
                <div className="mb-6">
                    <input type="text" placeholder="Search events..." className="search-bar" />
                </div>
                <Row>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title style={{
                                fontSize: '16px'
                            }}>Event this week</Card.Title>
                                <Card.Text>0</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title style={{
                                fontSize: '16px'
                            }}>Events this month</Card.Title>
                                <Card.Text>15</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{
                            height: '125px'
                        }} className="shadow-sm">
                            <Card.Body>
                                <Card.Title style={{
                                fontSize: '16px'
                            }}>Events Hosted by White Pearl</Card.Title>
                                <Card.Text>2</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{
                                height:'125px'
                            }} className=" shadow-sm">
                            <Card.Body>
                                <Card.Title style={{
                                fontSize: '16px'
                            }}>Events Hosted by Black Pearl</Card.Title>
                                <Card.Text>17</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Event Name</th>
                                    <th>Event Host</th>
                                    <th>Membership</th>
                                    <th>No of Guests</th>
                                    <th>Start Date</th>
                                    <th>Location</th>
                                    <th>Occasion</th>
                                    <th>Description</th>
                                    <th>Dresscode & RSVP</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Galaxy DJ set</td>
                                    <td>Matthew H</td>
                                    <td>Black Pearl</td>
                                    <td>0</td>
                                    <td>13 Jul 2024 20:00:00</td>
                                    <td>The Aubrey, Connaught Road, Central, Hong Kong</td>
                                    <td>Launch party</td>
                                    <td>The Aubrey, Connaught Road, Central, Hong Kong</td>
                                    <td>Glitter; 3 days before</td>
                                    <td>
                                        <i className="bi bi-eye"></i> <i className="bi bi-trash"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Test</td>
                                    <td>Whizpool 5</td>
                                    <td>Pearl</td>
                                    <td>1</td>
                                    <td>31 Jul 2024 16:52:00</td>
                                    <td>Islamabad, Pakistan</td>
                                    <td>Boy's Night</td>
                                    <td>Islamabad, Pakistan</td>
                                    <td>
                                        <i className="bi bi-eye"></i> <i className="bi bi-trash"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>test 1</td>
                                    <td>Abdul Manan</td>
                                    <td>Black Pearl</td>
                                    <td>0</td>
                                    <td>24 Jul 2024 15:53:00</td>
                                    <td>Islamabad, Punjab, Pakistan</td>
                                    <td>Boy's Night</td>
                                    <td>Islamabad, Punjab, Pakistan</td>
                                    <td>
                                        <i className="bi bi-eye"></i> <i className="bi bi-trash"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default ViewEvents;