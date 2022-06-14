import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: '',
        email: '',
    },
    reducers: {
        setProfile(state, action) {
            const {name, email} = action.payload;
            state.name = name
            state.email = email
        }
    }
})

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer