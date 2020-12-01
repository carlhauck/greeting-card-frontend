import React, { useState, useEffect, useRef } from "react"

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

  console.log(state.allCardImgs)
  const images = state.allCardImgs.map(i => {
    return (
      <div class="column">
          <img src={i.url} />
      </div>
    )
  })
  console.log(images)
  return (
    <div>
      <h1>Home</h1>
      <div class="row">
        {images}
      </div>
    </div >
  );
}
 
export default Home;