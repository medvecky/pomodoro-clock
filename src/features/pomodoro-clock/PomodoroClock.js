import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PomodoroClock() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Break control
                    </Col>
                    <Col>
                        Session control
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Timer display
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Timer Control
                    </Col>
                </Row>


            </Container>

        </div>
    );
}

export default PomodoroClock;