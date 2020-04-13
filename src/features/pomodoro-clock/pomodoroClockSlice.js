import {createSlice} from '@reduxjs/toolkit';

export const pomodoroClockSlice = createSlice({
    name: 'pomodoroClock',
    initialState: {
        timerIsOn: false,
        beep: false,
        timerMode: 'Session',
        breakLength: 5,
        sessionLength: 25,
        minutesLeft: 25,
        secondsLeft: 0

    },
    reducers: {
        changeState: state => {
            state.timerIsOn = !state.timerIsOn;
        },
        reset: state => {
            state.timerIsOn = false;
            state.beep = false;
            state.timerMode = 'Session';
            state.breakLength = 5;
            state.sessionLength = 25;
            state.minutesLeft = 25;
            state.secondsLeft = 0;
        },
        decrement: state => {
            if (state.secondsLeft > 0) {
                state.secondsLeft -= 1;
            } else if (state.minutesLeft > 0) {
                state.minutesLeft -= 1;
                state.secondsLeft = 59;
            } else if (state.secondsLeft === 0
                && state.minutesLeft === 0) {
                state.beep = true;
                if (state.timerMode === 'Session') {
                    state.timerMode = 'Break';
                    state.minutesLeft = state.breakLength;
                    state.secondsLeft = 0;
                } else {
                    state.timerMode = 'Session';
                    state.minutesLeft = state.sessionLength;
                    state.secondsLeft = 0;
                }
            }
        },
        incrementSessionLength: state => {
            if (state.sessionLength < 60) {
                state.sessionLength += 1;
                state.minutesLeft += 1;
            }
        },
        decrementSessionLength: state => {
            if (state.sessionLength > 1) {
                state.sessionLength -= 1;
                state.minutesLeft -= 1;
            }
        },
        incrementBreakLength: state => {
            if (state.breakLength < 60) {
                state.breakLength += 1;
            }
        },
        decrementBreakLength: state => {
            if (state.breakLength > 1) {
                state.breakLength -= 1;
            }
        },
        beepOff: state => {
            state.beep = false;
        }
    },
});

export const {
    changeState,
    decrement,
    reset,
    incrementBreakLength,
    decrementBreakLength,
    incrementSessionLength,
    decrementSessionLength,
    beepOff,
} = pomodoroClockSlice.actions;


export const selectBreakLength = state => state.pomodoroClock.breakLength.toString();
export const selectSessionLength = state => state.pomodoroClock.sessionLength.toString();
export const selectMinutes = state => state.pomodoroClock.minutesLeft.toString();
export const selectSeconds = state => state.pomodoroClock.secondsLeft.toString();
export const selectIsOn = state => state.pomodoroClock.timerIsOn;
export const selectTimerMode = state => state.pomodoroClock.timerMode;
export const selectBeepMode = state => state.pomodoroClock.beep;

export default pomodoroClockSlice.reducer;
