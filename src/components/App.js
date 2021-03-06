import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Search from './journey/Search';
import PrivateRoute from '../guards/PrivateRoute';
import Register from './Register';



function App() {
  return (
    <div  color='primary-color ' className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <PrivateRoute exact path='/search' component={Search}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;


