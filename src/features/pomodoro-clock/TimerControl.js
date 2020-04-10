import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faPause} from '@fortawesome/free-solid-svg-icons'
import {faStop} from '@fortawesome/free-solid-svg-icons'

function TimerControl() {
    return (
        <div>
            <Card text='info' border='info'>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Button
                                    variant="outline-info"
                                    id='start_stop'
                                >
                                    <FontAwesomeIcon icon={faPlay}/>
                                    <FontAwesomeIcon icon={faPause}/>
                                </Button>

                            </Col>
                            <Col>
                                <Button
                                    variant="outline-info"
                                    id='reset'
                                >
                                    <FontAwesomeIcon icon={faStop}/>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TimerControl;