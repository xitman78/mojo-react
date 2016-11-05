import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Mojo from './pages/Mojo'
import About from './pages/About'
import Company from './pages/about/Company'
import Contacts from './pages/about/Contacts'
import MyCanvas from './pages/Canvas'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}>
        <IndexRoute component={Company}/>
        <Route path="contacts" component={Contacts} />
      </Route>
      <Route path="mojo" component={Mojo}/>
      <Route path="canvas" component={MyCanvas}/>
    </Route>
  </Router>
,
  document.getElementById('root')
);
