import React from "react"
import IconFont from "./IconFont"
import IconColor from "./IconColor"
import IconFontSize from "./IconFontSize"

function TextEditor(props) {
  const locationY = props.locationY;

  let increment = Number(props.fontSize.substring(0, props.fontSize.length - 2)) + 1;
  if (increment >= 120) {
    increment = 120
  }
  let incrementedSize = increment.toString() + "px";

  let decrement = Number(props.fontSize.substring(0, props.fontSize.length - 2)) - 1;
  if (decrement <= 20) {
    decrement = 20
  }
  let decrementedSize = decrement.toString() + "px";

  return (
    <div className="text-editor">
      <p className="text-editor-label">{props.label}</p>
      {/* text input */}
      <div>
        <input
          type="text"
          className="text-edit-field"
          name={locationY + "Text"}
          placeholder={locationY + " text"}
          value={props.text}
          onChange={props.handleChange}
        />
      </div>

      {/* font select */}
      <div>
        <label className="toolicon" htmlFor={locationY + "Font"}>
          <IconFont />
        </label>
        <select
          name={locationY + "Font"}
          id={locationY + "Font"}
          style={{ marginLeft: 10 }}
          value={props.font}
          onChange={props.handleChange}>
          <option value="lora">Lora</option>
          <option value="mountains">Mountains of Christmas</option>
          <option value="billion-dreams">Billion Dreams</option>
          <option value="brightsome">Brightsome</option>
          <option value="cormorant-garamond">Cormorant Garamond</option>
        </select>
      </div>

      {/* color select */}
      <div>
        <label className="toolicon" htmlFor={locationY + "FontColor"}>
          <IconColor />
        </label>
        <input
          type="color"
          style={{ marginLeft: 10 }}
          className="color-input"
          id={locationY + "FontColor"}
          name={locationY + "FontColor"}
          value={props.fontColor}
          onChange={props.handleChange} />
      </div>

      {/* size select */}
      <div className="size-selector">
        <label className="toolicon" style={{ color: "#30659B" }} htmlFor={locationY + "FontSize"}>
          <IconFontSize />
          {/* {props.fontSize} */}
        </label>

        <button
          type="button"
          style={{ marginLeft: 10 }}
          name={locationY + "FontSize"}
          value={decrementedSize}
          onClick={props.handleChange}>
          <span className="material-icons">
            remove
          </span>
        </button>

        <button
          type="button"
          name={locationY + "FontSize"}
          value={incrementedSize}
          onClick={props.handleChange}>
          <span className="material-icons">
            add
          </span>
        </button>
      </div>
    </div >
  )
}

export default TextEditor