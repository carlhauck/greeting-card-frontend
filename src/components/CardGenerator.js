import React, { useState, useEffect } from "react"
import TextEditor from "./TextEditor"
import IconRotate from "./IconRotate"

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
    <div className="container">
      <div className="item" style={{ justifyItems: "center" }}>
        <p className="section-header">image</p>
        <form className="meme-form" onSubmit={handleSubmit}>
          <button className="img-button">
            <IconRotate />
          </button>
        </form>
      </div>

      <div className="meme">
        <img src={state.randomImg} alt="" />
        <h2 className={`top ${state.topFont}`} style={{ color: `${state.topFontColor}` }}>{state.topText}</h2>
        <h2 className={`bottom ${state.bottomFont}`} style={{ color: `${state.bottomFontColor}` }}>{state.bottomText}</h2>
      </div>

      <div className="item">
        <p className="section-header">text</p>
        <TextEditor
          locationY="top"
          text={state.topText}
          font={state.topFont}
          fontColor={state.topFontColor}
          handleChange={handleChange} />

        <TextEditor
          locationY="bottom"
          text={state.bottomText}
          font={state.bottomFont}
          fontColor={state.bottomFontColor}
          handleChange={handleChange} />
      </div>

    </div >
  )
}

export default CardGenerator