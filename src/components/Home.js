import React, { useState, useEffect } from "react"
import Category from "./Category"


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

  function handleClick(e) {
    localStorage.setItem("img", e.target.src)
  }

  return (
    <div className="container-home">
      <Category
        name="animals"
        allCardImgs={state.allCardImgs}
        handleClick={handleClick} />
      <Category
        name="birthday"
        allCardImgs={state.allCardImgs}
        handleClick={handleClick} />
      <Category
        name="christmas"
        allCardImgs={state.allCardImgs}
        handleClick={handleClick} />
      <Category
        name="easter"
        allCardImgs={state.allCardImgs}
        handleClick={handleClick} />
      <Category
        name="sympathy"
        allCardImgs={state.allCardImgs}
        handleClick={handleClick} />
      <Category
        name="other"
        allCardImgs={state.allCardImgs}
        handleClick={handleClick} />
    </div>
  );
}

export default Home;

