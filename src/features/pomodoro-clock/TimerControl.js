import React, {useCallback, useRef} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faPause} from '@fortawesome/free-solid-svg-icons'
import {faStop} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from "react-redux";
import {selectIsOn} from './pomodoroClockSlice';
import {useDispatch} from "react-redux";
import {changeState, decrement, reset} from './pomodoroClockSlice';

function useTimer() {
    const intervalRef = useRef(null);
    const dispatch = useDispatch();
    const start = useCallback(() => {
        if (intervalRef.current !== null) {
            return;
        }
        intervalRef.current = setInterval(() => {
            dispatch(decrement());
        }, 1000);
    }, []);

    const stop = useCallback(() => {
        if (intervalRef.current === null) {
            return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    return {start, stop};
}

function TimerControl(props) {
    const dispatch = useDispatch();
    const isTimerOn = useSelector(selectIsOn);
    const {start, stop} = useTimer();
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
                                    onClick={() => {
                                        if (!isTimerOn) {
                                            dispatch(changeState());
                                            start();
                                        } else {
                                            dispatch(changeState());
                                            stop();
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlay}/>
                                    <FontAwesomeIcon icon={faPause}/>
                                </Button>

                            </Col>
                            <Col>
                                <Button
                                    variant="outline-info"
                                    id='reset'
                                    onClick={() => {
                                        stop();
                                        props.stopSound();
                                        dispatch(reset());
                                    }}
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