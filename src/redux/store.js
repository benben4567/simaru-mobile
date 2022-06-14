import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './reducer/profile';

export const store = configureStore({
    reducer: {
        profile: profileSlice,
    }
})