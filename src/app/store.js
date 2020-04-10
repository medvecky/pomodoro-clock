import { configureStore } from '@reduxjs/toolkit';
import pomodoroClockReducer from '../features/pomodoro-clock/pomodoroClockSlice';

export default configureStore({
  reducer: {
    pomodoroClock: pomodoroClockReducer,
  },
});
