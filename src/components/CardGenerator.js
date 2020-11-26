import React, { useState, useEffect } from "react"

function CardGenerator() {
  const [state, setState] = useState({
    topText: "",
    bottomText: "",
    topFont: 'lora',
    bottomFont: 'mountains',
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allCardImgs: []
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

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    const randNum = Math.floor(Math.random() * state.allCardImgs.length)
    const randCardImg = state.allCardImgs[randNum].url
    setState({ ...state, randomImg: randCardImg })
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
        <h2 className={`top ${state.topFont}`}>{state.topText}</h2>
        <h2 className={`bottom ${state.bottomFont}`}>{state.bottomText}</h2>
      </div>
    </div>
  )
}

export default CardGenerator