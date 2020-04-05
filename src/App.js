import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home/Home';
import Staff from './pages/Staff/Staff.component';
import Dashboard from './pages/Dashboard/Dashboard.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/staff'component={Staff} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
