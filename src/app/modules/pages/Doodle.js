import { useParams} from "react-router-dom";
import DateCalendar from "../components/DateCalendar";
import {Button, Card, Form, ListGroup, Table} from 'react-bootstrap';

import './Doodle.css'
import React from "react";

function Doodle(){
    let { id } = useParams();
    return (
        <Card style={{maxWidth: '800px', margin: "0 auto"}}>
            <Card.Body>
                <Card.Title>title : {id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Create by <a href="mailto:nobody@anywhere.com">nobody</a> •
                    n days ago •
                    <a href="/doodle/123/admin/azerty">Edit Details</a>
                </Card.Subtitle>
                <hr/>
                <Card.Text>
                    Description
                </Card.Text>
                <Card.Text>
                    Location
                </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="2">Participants</th>
                            <th style={{textAlign: "center"}}><DateCalendar date={new Date()}/></th>
                            <th style={{textAlign: "center"}}><DateCalendar date={new Date()}/></th>
                            <th style={{textAlign: "center"}}><DateCalendar date={new Date()}/></th>
                            <th style={{textAlign: "center"}}><DateCalendar date={new Date()}/></th>
                            <th style={{textAlign: "center"}}><DateCalendar date={new Date()}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                            <td style={{textAlign: "center"}}><Form.Check type="checkbox"/></td>
                        </tr>
                    </tbody>
                </Table>
            </ListGroup>
            <Card.Footer className="box-controls">
                <Button variant="outline-primary">Save</Button>
            </Card.Footer>
        </Card>

    )
}

export default Doodle;