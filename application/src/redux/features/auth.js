import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: "auth",
    initialState: { email: null, token: '' },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state = {
                email: null,
                token: ''
            }
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;