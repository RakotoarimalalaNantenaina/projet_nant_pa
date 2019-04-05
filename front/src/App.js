import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import Test from './component/test'
import Liste from './component/liste'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
            <Route path="/test" component={Test} />
            <Route path="/list" component={Liste} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
