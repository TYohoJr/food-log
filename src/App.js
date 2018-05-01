import React, { Component } from 'react';
import './App.css';
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import InputForm from "./InputForm/InputForm";
import SignInNavbar from "./SignInNavbar/SignInNavbar";

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <SignInNavbar />
          <h2 id="app-header">Food Log</h2>
          <InputForm />
        </div>
      </Provider>
    );
  }
}
