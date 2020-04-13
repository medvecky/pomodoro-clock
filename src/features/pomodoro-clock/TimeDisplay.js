import React from "react";
import Card from "react-bootstrap/Card";
import {useSelector} from "react-redux";
import {
    selectMinutes,
    selectSeconds,
    selectTimerMode
} from "./pomodoroClockSlice";

function timeToDisplay(time) {
    if(time.length === 1) {
        return '0' + time;
    }
    return time;
}

function TimeDisplay(props) {
    const seconds = useSelector(selectSeconds);
    const minutes = useSelector(selectMinutes);
    const timerMode = useSelector(selectTimerMode);

    let minutesToDisplay = timeToDisplay(minutes);
    let secondsToDisplay = timeToDisplay(seconds);

    return (
        <div>
            <Card
                text='info'
                border='info'>
                <Card.Header id='timer-label'>
                    {timerMode}
                </Card.Header>
                <Card.Body
                    id='time-left'
                    style={{fontSize: '300%'}}
                >
                    {minutesToDisplay}:{secondsToDisplay}
                </Card.Body>
            </Card>
        </div>
    );
}

export default TimeDisplay;