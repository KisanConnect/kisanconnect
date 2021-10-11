import React from 'react';

import Header from './components/Header'
import Carousel from './components/Carousel'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'
import Main from './Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App(){
    
    
  return(
    <>
    <Header/>
    <Router>
    <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exaxt path="/">
            <Content />
          </Route>
      </Switch>
    </Router>
    <Footer/>
    </>
  )
}

function Content() {
  return (
    <>
    <Carousel/>
    <AboutUs/>
    <Features/>
    <Team/>
    </>
  );
}
export default App;