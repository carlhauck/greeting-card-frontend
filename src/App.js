import React from "react"
import Header from "./components/Header"
import CardGenerator from "./components/CardGenerator"
import './style.css';
import APIGetRqst from "./components/APIGetRqst";


function App() {
  return (
    <div>
      <Header />
      <CardGenerator />
      <APIGetRqst />
    </div>
  )
}

export default App