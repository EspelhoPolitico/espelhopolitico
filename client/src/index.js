import './styles/index.css';
import '../node_modules/semantic-ui-css/semantic.min.css'

import {
  IndexRoute,
  Route,
  Router,
  hashHistory,
} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import ParliamentApp from './components/ParliamentApp';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="deputados" component={ParliamentApp}/>
      <Route path="senadores" component={ParliamentApp}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
