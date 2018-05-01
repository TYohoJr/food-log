import React, { Component } from 'react';
import './App.css';
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <div className="App">
      </div>
      </Provider>
    );
  }
}
