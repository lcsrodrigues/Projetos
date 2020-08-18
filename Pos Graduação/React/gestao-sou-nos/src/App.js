import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Link, Route} from 'react-router-dom'

function App() {

  function Home(){
    return <h1>Home</h1>
  }

  function About({match}){
  return <h1>About {match.params.name}</h1>
  }

  function Contact(){
    return <h1>Contact</h1>
  }

  return (
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about/Lucas">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

    <Route exact path="/" component={Home}></Route>
    <Route path="/about/:name" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>

    </BrowserRouter>
  );
}

export default App;
