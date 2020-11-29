import React from "react"
import IconFont from "./IconFont"
import IconColor from "./IconColor"

function TextEditor(props) {
  const locationY = props.locationY;
  
  let increment = Number(props.fontSize.substring(0,props.fontSize.length - 2)) + 1; 
  if (increment >= 120) {
    increment = 120
  }
  let incrementedSize = increment.toString() + "px";  
  
  let decrement = Number(props.fontSize.substring(0,props.fontSize.length - 2)) - 1; 
    if (decrement <= 20) {
      decrement = 20
    }
  let decrementedSize = decrement.toString() + "px";  

  return (
    <div>
      {/* text input */}
      <input
        type="text"
        name={locationY + "Text"}
        placeholder={locationY + " text"}
        value={props.text}
        onChange={props.handleChange}
      />
      {/* font select */}
      <label for={locationY + "Font"}>
        <IconFont />
      </label>
      <select
        name={locationY + "Font"}
        id={locationY + "Font"}
        value={props.font}
        onChange={props.handleChange}>
        <option value="lora">Lora</option>
        <option value="mountains">Mountains of Christmas</option>
      </select>
      {/* color select */}
      <label for={locationY + "FontColor"}>
        <IconColor />
      </label>
      <input
        type="color"
        id={locationY + "FontColor"}
        name={locationY + "FontColor"}
        value={props.fontColor}
        onChange={props.handleChange} />
      {/* size select */}
      <p>fontsixe:  {props.fontSize} </p>
      <button 
        type="button" 
        name={locationY + "FontSize"}
        value={incrementedSize}
        onClick={props.handleChange}>
          +
      </button>
      <button 
        type="button" 
        name={locationY + "FontSize"}
        value={decrementedSize}
        onClick={props.handleChange}>
          -
      </button>
    </div>
  )
}

export default TextEditor