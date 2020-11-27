import React, { useState, useEffect } from "react"

function CardGenerator() {
  const [state, setState] = useState({
    topText: "",
    topFont: 'lora',
    topFontColor: '#ffffff',
    bottomText: "",
    bottomFont: 'mountains',
    bottomFontColor: '#ffffff',
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
        <label for="topFont">Choose a top font:</label>
        <select name="topFont" id="topFont" value={state.topFont} onChange={handleChange}>
          <option value="lora">Lora</option>
          <option value="mountains">Mountains of Christmas</option>
        </select>
        <input type="color" id="topFontColor" name="topFontColor"
          value={state.topFontColor} onChange={handleChange} />
        <label for="topFontColor">Top Font Color</label>

        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={state.bottomText}
          onChange={handleChange}
        />
        <label for="bottomFont">Choose a bottom font:</label>
        <select name="bottomFont" id="bottomFont" value={state.bottomFont} onChange={handleChange}>
          <option value="lora">Lora</option>
          <option value="mountains">Mountains of Christmas</option>
        </select>
        <input type="color" id="bottomFontColor" name="bottomFontColor"
          value={state.bottomFontColor} onChange={handleChange} />
        <label for="bottomFontColor">Bottom Font Color</label>

        <button>Gen</button>
      </form>
      <div className="meme">
        <img src={state.randomImg} alt="" />
        <h2 className={`top ${state.topFont}`} style={{ color: `${state.topFontColor}` }}>{state.topText}</h2>
        <h2 className={`bottom ${state.bottomFont}`} style={{ color: `${state.bottomFontColor}` }}>{state.bottomText}</h2>
      </div>
    </div>
  )
}

export default CardGenerator