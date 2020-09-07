import React, { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Layout from './Components/Pages/Layout';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Builder from './Components/Pages/Builder';
import About from './Components/Pages/About';

function App() {

  const NavRoute = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
      <Fragment>
        <Layout>
            <Component {...props}/>
        </Layout>      
      </Fragment>
    )}/>
  )

  return (
    
    <div style={{textAlign: "center"}}>
      <p>
        App JS
      </p>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />

          <NavRoute  exact path='/' component={Home} />
          <NavRoute  exact path='/builder' component={Builder} />
          <NavRoute  exact path='/about' component={About} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
