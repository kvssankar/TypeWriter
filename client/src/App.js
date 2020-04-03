import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Route path="/" exact component={Landing}/>
      <Route path="/start" exact component={Keyboard}/>
      </Router>
    </div>
  );
}

export default App;
