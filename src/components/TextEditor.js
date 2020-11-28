import React from "react"
import IconFont from "./IconFont"
import IconColor from "./IconColor"

function TextEditor(props) {
  const locationY = props.locationY;
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
    </div>
  )
}

export default TextEditor