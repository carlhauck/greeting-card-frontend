import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header"
import CardGenerator from "./components/CardGenerator"
import Home from './components/Home';
import Navigation from './components/Navigation';

import './style.css';
import './fonts.css';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Header component={Navigation} /> 
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cards" component={CardGenerator}/>
      </Switch>
    </div> 
  </BrowserRouter>
  )
}
// previous App.js function:
// function App() {
//   return (
//     <div>
//       <Header />
//       <CardGenerator />
//     </div>
//   )
// }
export default App