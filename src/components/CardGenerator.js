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
    allCardImgs: [],
    canvasWidth: "",
    canvasHeight: "",
  })

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then(response => response.json())
      .then(response => {
        const images = response
        let selectedImg
        if (localStorage.getItem('img')) {
          selectedImg = localStorage.getItem('img');
        } else {
          let randNum = Math.floor(Math.random() * images.length)
          selectedImg = images[randNum].url;
        }
        setState(state => ({
          ...state,
          allCardImgs: images,
          randomImg: selectedImg
        }));
      })
      .then(() =>
        localStorage.removeItem('img')
      );
  }, [])

  window.addEventListener("resize", resizeCanvas);

  useEffect(() => {
    let image = document.getElementById('card-image');
    if (image.height === 0) {
      setTimeout(() => {
        setState(state => ({
          ...state,
          canvasWidth: `${image.width}px`,
          canvasHeight: `${image.height}px`
        }))
      }, 500);
    } else {
      setState(state => ({
        ...state,
        canvasWidth: `${image.width}px`,
        canvasHeight: `${image.height}px`
      }))
    }
  }, [state.randomImg])

  function resizeCanvas() {
    let image = document.getElementById('card-image');
    setState(state => ({
      ...state,
      canvasWidth: `${image.width}px`,
      canvasHeight: `${image.height}px`
    }))
  }

  function handleChange(e) {
    const value = e.target.value;
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

  async function downloadImg(e) {

    const fonts = {
      'lora': "Lora-Regular",
      'mountains': "MountainsofChristmas-Bold"
    }

    // Handles text wrap
    function getLines(ctx, text, maxWidth) {
      var words = text.split(" ");
      var lines = [];
      var currentLine = words[0];

      for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
          currentLine += " " + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
      lines.push(currentLine);
      return lines;
    }

    let image = document.getElementById('card-image');

    let canvas = document.getElementById('card-canvas');
    let canvasRect = canvas.getBoundingClientRect();

    let topText = document.getElementById('top-text');
    let topTextRect = topText.getBoundingClientRect();

    let bottomText = document.getElementById('bottom-text');
    let bottomTextRect = bottomText.getBoundingClientRect();

    // Sets context
    let ctx = canvas.getContext("2d");
    ctx.width = canvas.width;
    ctx.height = canvas.height;

    // Draws image
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Draws top text
    ctx.font = `${state.topFontSize} ${fonts[state.topFont]}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = `${state.topFontColor}`;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.translate(0, topTextRect.top - canvasRect.top + 15) // additional 15px for h2 margin
    let linesTop = getLines(ctx, state.topText, (canvas.width * 0.8) - 10); // 80% width and 5px padding on sides
    linesTop.forEach(function (line, i) {
      ctx.strokeText(line, (canvas.width / 2), (Number(state.topFontSize.substring(0, state.topFontSize.length - 2)) + 15) * i);
      ctx.fillText(line, (canvas.width / 2), (Number(state.topFontSize.substring(0, state.topFontSize.length - 2)) + 15) * i);
    });

    // Draws bottom text
    ctx.font = `${state.bottomFontSize} ${fonts[state.bottomFont]}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = `${state.bottomFontColor}`;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.translate(0, bottomTextRect.top - topTextRect.top) // Y offset between two pieces of text; starts at previous translate point
    let linesBottom = getLines(ctx, state.bottomText, (canvas.width * 0.8) - 10);
    linesBottom.forEach(function (line, i) {
      ctx.strokeText(line, (canvas.width / 2), (Number(state.bottomFontSize.substring(0, state.bottomFontSize.length - 2)) + 15) * i);
      ctx.fillText(line, (canvas.width / 2), (Number(state.bottomFontSize.substring(0, state.bottomFontSize.length - 2)) + 15) * i);
    });

    // Downloads canvas
    console.dir(canvas);
    let download = document.getElementById("download");
    let imageDl = canvas.toDataURL("image/png");
    download.setAttribute("href", imageDl);

    // Clears canvas
    ctx.translate(0, -(bottomTextRect.top - canvasRect.top + 15)) // resets Y translate to OG point (I think?)
    ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);

  }

  return (
    <div className="container">
      <div className="item">
        <p className="section-header">image</p>
        <form className="meme-form">
          <button type="button" className="img-button" onClick={handleImgChange}>
            <IconRotate />
          </button>
          <button type="button" className="img-button"
            id="download"
            href=""
            download="download.png"
            onClick={downloadImg}>
            <IconDownload />
          </button>
        </form>
      </div>

      <div className="item meme">
        <canvas id="card-canvas" width={state.canvasWidth} height={state.canvasHeight} style={{ position: 'absolute' }}>
        </canvas>
        <img id="card-image" crossOrigin="Anonymous" src={state.randomImg} alt="" />
        <h2 id="top-text" className={`top ${state.topFont}`} style={{ color: `${state.topFontColor}`, fontSize: `${state.topFontSize}` }}>{state.topText}</h2>
        <h2 id="bottom-text" className={`bottom ${state.bottomFont}`} style={{ color: `${state.bottomFontColor}`, fontSize: `${state.bottomFontSize}` }}>{state.bottomText}</h2>
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