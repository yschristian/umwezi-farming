import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        users: []
    },

    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFalure: (state) => {
            state.isFetching = false;
            state.error = true
        },

        //GET USERS
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload
        },
        getUserFailled: (state) => {
            state.isFetching = false;
            state.error = true
        },

        //DELETE USER

        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item) => item._id === action.payload.id), 1
            )
        },
        deleteUserFailled: (state) => {
            state.isFetching = false;
            state.error = true
        },
        //ADD USER

        addUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        addUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload)
        },
        addUserFailled: (state) => {
            state.isFetching = false;
            state.error = true
        },
        //LOGOUT
        logout: (state) => {
            state.currentUser = null,
            state.isFetching = false;
        }

    }

})

export const {
    logout,
    loginStart,
    loginSuccess,
    loginFalure,
    getUserStart,
    getUserSuccess,
    getUserFailled,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailled,
    addUserStart,
    addUserSuccess,
    addUserFailled,

} = userSlice.actions
export default userSlice.reducer