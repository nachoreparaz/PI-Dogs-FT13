import React, { useEffect, useState } from 'react';
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import Dogs from './components/Dogs.js';
import About from './components/About.js';
import SearchDogs from './components/SearchDogs.js';
import NavBar from './components/NavBar.js';
import Create from './components/Create.js';

const App = () => {

  return (
      <div>
        <Route exact path = '/' component = { LandingPage }/>
        <Route path = '/' component = { NavBar }/>
        <Route exact path = '/Home' component = { Dogs }/>
        <Route path = '/Search' component = { SearchDogs }/>
        <Route path = '/dog/:id' component = { About }/>
        <Route path = '/Create' component = { Create }/>
      </div>
  )
}

export default App
