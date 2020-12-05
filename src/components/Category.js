import React from "react"
import { NavLink } from 'react-router-dom';

function Category(props) {

  // Animals cards
  const images = props.allCardImgs.map(i => {
    let img
    if (i.category === props.name) {
      img = <NavLink to="/create"><img className="card-preview-img" onClick={props.handleClick} src={i.url} alt={`${props.name}Card`} key={i.id} id={i.id} /></NavLink>
    }
    return img
  })

  return (
    <div className="category-section" id={props.name}>
      <h3>{props.name}</h3>
      <div className="category-row">
        {images}
      </div>
    </div>
  )
}

export default Category