import { combineReducers } from 'redux';
// import React from "react";

const loggedInCheckerReducer = (state, action) => {
    if (!state) {
        state = {
            loggedInCheck: "Welcome to Food Log\nPlease Log In"
        }
    }
    switch (action.type) {
        case "userLoggedIn":
            return state = {
                loggedInCheck: "Welcome to Food Log!"
            }
        case "userLoggedOut":
            return state = {
                loggedInCheck: "Welcome to Food Log\nPlease Log In"
            }
        default:
            return state = {
                ...state
            }
    }
}

const userDetailsReducer = (state, action) => {
    if (!state) {
        state = {
            username: "",
            password: "",
            verifyPassword: ""
        }
    }
    switch (action.type) {
        case "onUsernameChange":
            return state = {
                ...state,
                username: action.username
            }
        case "onPasswordChange":
            return state = {
                ...state,
                password: action.password
            }
        case "onVerifyPasswordChange":
            return state = {
                ...state,
                verifyPassword: action.verifyPassword
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    userDetailsReducer: userDetailsReducer,
    loggedInCheckerReducer: loggedInCheckerReducer
});
