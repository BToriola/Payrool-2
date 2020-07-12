import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import './index.css';
import App from './App';
import Signin from './signin';
import Employee from './employee';
import Tax from './tax';
import Compensation from './compensation';
import Reviews from './Reviews'
import Admin from './admin'
import * as serviceWorker from './serviceWorker';


const routing = (

  <Router>
    <Switch>
      <Route exact path="/" component={Admin} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/employee" component={Employee} />
      <Route exact path="/review" component={Reviews} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/tax" component={Tax} />
      <Route exact path="/compensation" component={Compensation} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
