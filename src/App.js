import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home/Home';
import Staff from './pages/Staff/Staff.component';
import Challenges from './pages/Challenges/Challenges.component'
import Challenge1 from './pages/Challenge1/Challenge1.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/staff'component={Staff} />
        <Route path='/challenges' component={Challenges} />
        <Route path='/challengeschallenges/challenge1' component={Challenge1} />
      </Switch>
    </div>
  );
}

export default App;
