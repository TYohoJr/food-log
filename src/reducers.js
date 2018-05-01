import { combineReducers } from 'redux';
// import React from "react";

// Change the component that is the current tab being displayed
const activePageReducer = (state, action) => {
    if (!state) {
        state = {
            activePage: "Current active page",
        }
    }
    switch (action.type) {
        case "changeActivePage":
            return state = {
                activePage: action.activePage
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    activePageReducer: activePageReducer,
});
