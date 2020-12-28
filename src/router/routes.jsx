import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Navbar from '../components/navbar/navbar'
import Home from '../components/home/home'
import Singin from '../components/singin/singin'


  const Routes = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/singin">
            <Singin />
          </Route>
        </Switch>
      </Router>
    )
  }

  export default Routes;