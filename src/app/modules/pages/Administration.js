import React, {useState, useCallback} from 'react';
import {Calendar} from '@natscale/react-calendar';
import {useParams} from "react-router-dom";
import {Card, Button, Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DateCalendar from "../components/DateCalendar";

import '@natscale/react-calendar/dist/main.css';


import './Administration.css';

function Administration() {
    let {id, pwd} = useParams();

    const [dates, setDates] = useState([]);

    const onChange = useCallback(
        (dates) => {
            dates.sort((a,b) => new Date(a) - new Date(b));
            setDates(dates);
        },
        [setDates],
    );

    return (
        <Card style={{maxWidth: '800px', margin: "0 auto"}}>
            <Card.Body>
                <Card.Title as="h5">Edit Event : {id} + {pwd}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">You can makes changes to your existing event by changing the fields in the form below.</Card.Subtitle>
                <hr/>
                <Form>
                    <section className="box-section">
                        <div className="section-details">
                            <div className="section-title">Your Details</div>
                        </div>
                        <div className="section-main">
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                            </Row>
                        </div>
                    </section>
                    <section className="box-section">
                        <div className="section-details">
                            <div className="section-title">Your Events</div>
                        </div>
                        <div className="section-main">
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="Location"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicLocation">
                                    <Form.Label>Description (optional)</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Description..."
                                        style={{height: '100px'}}
                                    />
                                </Form.Group>
                            </Row>
                        </div>
                    </section>
                    <section className="box-section">
                        <div className="section-details">
                            <div className="section-title">Choose Dates</div>
                            <ul className="daticon-list">
                                {dates.map(date => {
                                    return <li><DateCalendar date={date}/></li>
                                })}
                            </ul>
                        </div>
                        <div className="section-main">
                            <Row><Form.Label>Calendar</Form.Label></Row>
                            <Row><Col style={{textAlign: "center"}}><Calendar value={dates} onChange={onChange} isMultiSelector={true}/></Col></Row>
                        </div>
                    </section>
                    <section className="box-section">
                        <div className="section-details">
                            <div className="section-title">Settings</div>
                        </div>
                        <div className="section-main">
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicNbPlayer">
                                    <Form.Label>Number of Player</Form.Label>
                                    <Form.Control type="number" placeholder="Number of Player"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicAllowVote">
                                    <Form.Check type="checkbox" label="Allow people to vote in the Poll" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicAllowBackup">
                                    <Form.Check type="checkbox" label="Allow people to tell if they are available" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col>
                                    Delete Event
                                    <Form.Label>Once you delete an event it will no longer be accessible</Form.Label>
                                </Col>
                                <Col style={{textAlign: "right"}}>
                                    <Button variant="outline-danger">Delete Event</Button>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </Form>
            </Card.Body>
            <Card.Footer className="box-controls">
                <Button variant="outline-secondary">Undo</Button>{' '}
                <Button variant="outline-primary">Done</Button>
            </Card.Footer>

        </Card>
    )
}


export default Administration;