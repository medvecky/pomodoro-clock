import {createSlice} from '@reduxjs/toolkit';

export const pomodoroClockSlice = createSlice({
    name: 'pomodoroClock',
    initialState: {
        timerIsOn: false,
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
            state.minutesLeft = state.sessionLength;
            state.secondsLeft = 0;
            state.timerIsOn = false;
        },
        decrement: state => {
            if (state.secondsLeft > 0) {
                state.secondsLeft -= 1;
            } else if (state.minutesLeft > 0) {
                state.minutesLeft -= 1;
                state.secondsLeft = 59;
            }
        }
    },
});

export const {changeState, decrement, reset} = pomodoroClockSlice.actions;


export const selectBreakLength = state => state.pomodoroClock.breakLength.toString();
export const selectSessionLength = state => state.pomodoroClock.sessionLength.toString();
export const selectMinutes = state => state.pomodoroClock.minutesLeft.toString();
export const selectSeconds = state => state.pomodoroClock.secondsLeft.toString();
export const selectIsOn = state => state.pomodoroClock.timerIsOn;

export default pomodoroClockSlice.reducer;
