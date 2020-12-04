//////////////////////////////////  TO DO  ///////////////////////////////////////////////
// - Display Image on Greeting Card Page to reflect which image was clicked on HOME page

import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
 

function Home() {
  const [state, setState] = useState({
    allCardImgs: [],
  })

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then(response => response.json())
      .then(response => {
        const images = response
        setState(state => ({
          ...state,
          allCardImgs: images
        }));
      })
  }, [])

  

  console.log("state.allCardImgs: ")
  console.log(state.allCardImgs)
  // XMAS cards
  const imagesChristmas = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "Christmas"){
        img = <img src={i.url} alt="xmasCard" id={i.id} height="150" width="150" />
    }
    return(
      img
    )
  })
  // Birthday cards
  const imagesBirthday = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "Birthday"){
      return(
        img = <img src={i.url} alt="birtdayCard" id={i.id} height="150" width="150" />
      )
    }
    return(
      img
    )
  })

  
  //Store img selected in LOCALSTORAGE
  //Does not work
  function handleClick(e) {
    console.log(e.target.currentSrc)
    let imgurl = e.target.currentSrc
    let imgurl1 = JSON.stringify(imgurl)
    let img2 = JSON.parse(imgurl1)
    localStorage.setItem = ("img", img2)
  }




  return (
    <div class="centerDiv">
      &nbsp;
      &nbsp;
      <h3>Christmas Caring</h3>
      <div class="column" id="Christmas">
        <div class="row">
          <NavLink to="/cards" onClick={handleClick}>{imagesChristmas}</NavLink>
        </div>
      </div>  
      &nbsp;
      &nbsp;
      &nbsp;
      <h3>Birthday Besties</h3>
      <div class="column" id="Birthday">
        <div class="row">
          <NavLink to="/cards" onClick={handleClick} >{imagesBirthday}</NavLink>
        </div>
      </div>
    </div>
  );
}
 
export default Home;

