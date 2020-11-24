import React, { useState, useEffect } from "react"
import axios from 'axios';

function CardGenerator() {
  const [state, setState] = useState({
    topText: "",
    bottomText: "",
    randomImg: "",
    allMemeImgs: []
  })

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        setState({
          ...state,
          allMemeImgs: memes
        });
      })
  }, [])

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    const randNum = Math.floor(Math.random() * state.allMemeImgs.length)
    const randMemeImg = state.allMemeImgs[randNum].url
    setState({ ...state, randomImg: randMemeImg })
  }

  return (
    <div>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={state.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={state.bottomText}
          onChange={handleChange}
        />

        <button>Gen</button>
      </form>
      <div className="meme">
        <img src={state.randomImg} alt="" />
        <h2 className="top">{state.topText}</h2>
        <h2 className="bottom">{state.bottomText}</h2>
      </div>
    </div>
  )
}

export default CardGenerator