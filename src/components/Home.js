import React, { useState, useEffect, useRef } from "react"
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
          allCardImgs: images,
          randomImg: images[0].url
        }));
      })
  }, [])

  

  console.log("state.allCardImgs: ")
  console.log(state.allCardImgs)
  const images = state.allCardImgs.map(i => {
    const id = i.id
    return (
      <img src={i.url} id={id} height="200" width="200"/>
    )
  })
  
  console.log(images)
  function handleClick(e) {
    console.log(e.target.currentSrc)

    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div>
      <h1>Home</h1>
      <div class="column">
        <div class="row">
          <NavLink to="/cards" onClick={handleClick}>{images}</NavLink>
        </div>
      </div>
    </div>
  );
}
 
export default Home;


//////////////////////////////////  START ON LINE 47  ///////////////////////////////////////////////
// #1 WHY IS NAV NOT GOING TO "Greting Card" Page? 
// #2 Restate img to show on Greeting Card Page to reflect what which image was clicked on HOME page as seen in Function HandleClick console.log