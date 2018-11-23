import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Layout from "./components/layout";
import Event from './components/event';
import Signup from './components/signup';
import Home from './components/home';

const app = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout >
        <Route exact path='/' component={Event}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/home' component={Home}/>
        <Route path='/auth/google' />
      </Layout >
    </Router>
  </Provider>, app);
