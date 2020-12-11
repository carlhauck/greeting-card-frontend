import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Category(props) {
  const [windowWidth, setWindowWidth] = useState();

  window.addEventListener("resize", resizeWindow);

  useEffect(() => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  }, [])

  function resizeWindow() {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  }

  const responsive = {
    largeDevice: {
      breakpoint: { max: 8000, min: 768 },
      items: Math.floor((windowWidth - 120) / 200) - 0.05
    },
    smallDevice: {
      breakpoint: { max: 768, min: 0 },
      items: Math.floor((windowWidth - 30) / 200) - 0.05
    },
  };

  // https://www.npmjs.com/package/react-multi-carousel
  return (
    <div className="category-section" id={props.name}>
      <h3 className="category-name">{props.name}</h3>
      <Carousel responsive={responsive} class="carousel">
        {props.allCardImgs.map(i => {
          let img
          if (i.category === props.name) {
            img = <div><NavLink to="/create"><img className="card-preview-img" onClick={props.handleClick} src={i.url} alt={i.name} key={i} id={i.id} /></NavLink></div>
          }
          return img
        })}
      </Carousel>
    </div>
  )
}

export default Category