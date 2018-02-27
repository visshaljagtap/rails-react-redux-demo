import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom'

import About from '../components/About'
import Contact from '../components/Contact'

// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';
import allReducers from '../reducers';
import App from '../components/App';

// const logger = createLogger();
const store = createStore(
  allReducers
  // applyMiddleware(thunk, promise, logger)
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </HashRouter>
      </Provider >
    );
  }
}