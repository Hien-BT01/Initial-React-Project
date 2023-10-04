import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    token: null,
    email: null,
    role: '',
    exp: 0,
    name: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email
            state.role = action.payload.role
            state.exp = action.payload.exp
            state.userId = action.payload.userId
            state.token = action.payload.token
            state.name = action.payload.name
        },
        logout: () => initialState,
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
