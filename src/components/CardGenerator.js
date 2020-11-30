import React, { useState, useEffect } from "react"
import TextEditor from "./TextEditor"
import IconRotate from "./IconRotate"
import IconDownload from "./IconDownload"

function CardGenerator() {
  const [state, setState] = useState({
    topText: "",
    topFont: 'lora',
    topFontColor: '#ffffff',
    topFontSize: "60px",
    bottomText: "",
    bottomFont: 'mountains',
    bottomFontColor: '#ffffff',
    bottomFontSize: "60px",
    randomImg: "",
    allCardImgs: []
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

  function handleChange(e) {
    const value = e.target.value;
    console.log(e.target.value);
    console.log(e.target);
    setState({
      ...state,
      [e.target.name]: value
    });

  }

  function handleImgChange(e) {
    e.preventDefault()
    const randNum = Math.floor(Math.random() * state.allCardImgs.length)
    const randCardImg = state.allCardImgs[randNum].url
    setState({ ...state, randomImg: randCardImg })
  }

  return (
    <div className="container">
      <div className="item" style={{ justifyItems: "center" }}>
        <p className="section-header">image</p>
        <form className="meme-form">
          <button type="button" className="img-button" onClick={handleImgChange}>
            <IconRotate />
          </button>
          <button className="img-button">
            <IconDownload />
          </button>
        </form>
      </div>

      <div className="item meme">
        {/* <canvas id="img-canvas">
          Canvas requires a browser that supports HTML5.
        </canvas> */}
        <img crossOrigin="Anonymous" src={state.randomImg} alt="" />
        <h2 className={`top ${state.topFont}`} style={{ color: `${state.topFontColor}`, fontSize: `${state.topFontSize}` }}>{state.topText}</h2>
        <h2 className={`bottom ${state.bottomFont}`} style={{ color: `${state.bottomFontColor}`, fontSize: `${state.bottomFontSize}` }}>{state.bottomText}</h2>
      </div>

      <div className="item">
        <p className="section-header">text</p>
        <TextEditor
          locationY="top"
          label="upper"
          text={state.topText}
          font={state.topFont}
          fontColor={state.topFontColor}
          fontSize={state.topFontSize}
          handleChange={handleChange} />

        <TextEditor
          locationY="bottom"
          label="lower"
          text={state.bottomText}
          font={state.bottomFont}
          fontColor={state.bottomFontColor}
          fontSize={state.bottomFontSize}
          handleChange={handleChange} />
      </div>

    </div >
  )
}

export default CardGenerator