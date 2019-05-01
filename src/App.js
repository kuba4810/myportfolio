import React, { Component } from 'react';
import { Router, Route,Switch } from 'react-router-dom';
import history from './components/history';



import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import CV from './components/CV'


class App extends Component {
  render() {
    return (
      <Router  history={history}>
        <div >
          <Header />
          <Route  exact path="/" component={Home}/>
          <Route  path="/portfolio" component={Portfolio}/>
          <Route  path="/about" component={About}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/skills" component={Skills}/>  
          <Route  path="/cv" component={CV}/>        
        </div>
      </Router>
    );
  }
}

export default App;
