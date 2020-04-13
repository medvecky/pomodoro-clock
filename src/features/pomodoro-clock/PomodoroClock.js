import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TimeSpanLengthControl from "./TimeSpanLengthControl";
import './PomodoroClock.css'

import {useDispatch, useSelector} from "react-redux";
import {
    selectBreakLength,
    selectSessionLength,
    incrementSessionLength,
    decrementSessionLength,
    incrementBreakLength,
    decrementBreakLength,
    selectBeepMode,
    beepOff
} from "./pomodoroClockSlice";
import TimeDisplay from "./TimeDisplay";
import TimerControl from "./TimerControl";

function playSound() {
    let element = document.getElementById('beep');
    element.play();
}

function stopSound() {
    let element = document.getElementById('beep');
    element.pause();
    element.currentTime = 0;
}

function PomodoroClock() {
    const breakLength = useSelector(selectBreakLength);
    const sessionLength = useSelector(selectSessionLength);
    const dispatch = useDispatch();
    const beep = useSelector(selectBeepMode);
    if(beep) {
        playSound();
        dispatch(beepOff());
    }
    return (
        <div>
            <Container className="main">
                <Row>
                    <Col>
                        <TimeSpanLengthControl
                            caption="Break length"
                            id='break'
                            value={breakLength}
                            increment={() => dispatch(incrementBreakLength())}
                            decrement={() => dispatch(decrementBreakLength())}
                        />
                    </Col>
                    <Col>
                        <TimeSpanLengthControl
                            caption="Session length"
                            id='session'
                            value={sessionLength}
                            increment={() => dispatch(incrementSessionLength())}
                            decrement={() => dispatch(decrementSessionLength())}
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
                        <TimerControl stopSound={() => stopSound()}/>
                    </Col>
                </Row>
            </Container>
            <audio id="beep" preload="auto"
                   src="https://goo.gl/65cBl1"/>
        </div>
    );
}

export default PomodoroClock;