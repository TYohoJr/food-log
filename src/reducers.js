import { combineReducers } from 'redux';
// import React from "react";

const userLoginReducer = (state, action) => {
    if(!state) {
        state = {
            username: "",
            password: ""
        }
    }
    switch(action.type) {
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
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    userLoginReducer: userLoginReducer
});
