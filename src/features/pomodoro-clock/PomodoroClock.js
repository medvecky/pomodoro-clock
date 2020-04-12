import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TimeSpanLengthControl from "./TimeSpanLengthControl";
import './PomodoroClock.css'

import {useSelector} from "react-redux";
import {
    selectBreakLength,
    selectSessionLength
} from "./pomodoroClockSlice";
import TimeDisplay from "./TimeDisplay";
import TimerControl from "./TimerControl";

function PomodoroClock() {
    const breakLength = useSelector(selectBreakLength);
    const sessionLength = useSelector(selectSessionLength);

    return (
        <div>
            <Container className="main">
                <Row>
                    <Col>
                        <TimeSpanLengthControl
                            caption="Break length"
                            id='break'
                            value={breakLength}
                        />
                    </Col>
                    <Col>
                        <TimeSpanLengthControl
                            caption="Session length"
                            id='session'
                            value={sessionLength}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TimeDisplay/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TimerControl/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default PomodoroClock;