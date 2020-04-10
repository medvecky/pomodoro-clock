import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card, {CardBody} from "react-bootstrap/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

import Button from "react-bootstrap/Button";

function TimeSpanLengthControl(props) {
    return (
        <div id={props.id + '-label'}>
            <Card
                border='info'
                text='info'
            >
                <Card.Header>
                    {props.caption}
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Button
                                    variant="outline-info"
                                    id={props.id + '-increment'}
                                >
                                    <FontAwesomeIcon
                                        color="lightseagreen"
                                        icon={faPlus}
                                    />
                                </Button>
                            </Col>
                            <Col id={props.id + '-length'}>
                                {props.value}
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-info"
                                    id={props.id + '-decrement'}
                                >
                                    <FontAwesomeIcon
                                        color="lightseagreen"
                                        icon={faMinus}
                                    />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TimeSpanLengthControl;