import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';


function Home() {
  const [state, setState] = useState({
    allCardImgs: [],
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

  function handleClick(e) {
    localStorage.setItem("img", e.target.src)
  }

  // Animals cards
  const imagesAnimals = state.allCardImgs.map(i => {
    let img
    if (i.category === "animals") {
      img = <NavLink to="/create"><img className="card-preview-img" onClick={handleClick} src={i.url} alt="animalsCard" key={i.id} id={i.id} /></NavLink>
    }
    return img
  })
  // Birthday cards
  const imagesBirthday = state.allCardImgs.map(i => {
    let img
    if (i.category === "birthday") {
      return (
        img = <NavLink to="/create"><img className="card-preview-img" onClick={handleClick} src={i.url} alt="birthdayCard" key={i.id} id={i.id} /></NavLink>
      )
    }
    return img
  })
  // Christmas cards
  const imagesChristmas = state.allCardImgs.map(i => {
    let img
    if (i.category === "christmas") {
      img = <NavLink to="/create"><img className="card-preview-img" onClick={handleClick} src={i.url} alt="christmasCard" key={i.id} id={i.id} /></NavLink>
    }
    return img
  })
  // Easter cards
  const imagesEaster = state.allCardImgs.map(i => {
    let img
    if (i.category === "easter") {
      img = <NavLink to="/create"><img className="card-preview-img" onClick={handleClick} src={i.url} alt="easterCard" key={i.id} id={i.id} /></NavLink>
    }
    return img
  })
  // Other cards
  const imagesOther = state.allCardImgs.map(i => {
    let img
    if (i.category === "other") {
      img = <NavLink to="/create"><img className="card-preview-img" onClick={handleClick} src={i.url} alt="otherCard" key={i.id} id={i.id} /></NavLink>
    }
    return img
  })
  // Sympathy cards
  const imagesSympathy = state.allCardImgs.map(i => {
    let img
    if (i.category === "sympathy") {
      img = <NavLink to="/create"><img className="card-preview-img" onClick={handleClick} src={i.url} alt="sympathyCard" key={i.id} id={i.id} /></NavLink>
    }
    return img
  })


  return (
    <div className="container-home">
      <h3>Animals</h3>
      <div className="category-section" id="animals">
        <div className="category-row">
          {imagesAnimals}
        </div>
      </div>
      <h3>Birthday</h3>
      <div className="category-section" id="birthday">
        <div className="category-row">
          {imagesBirthday}
        </div>
      </div>
      <h3>Christmas</h3>
      <div className="category-section" id="christmas">
        <div className="category-row">
          {imagesChristmas}
        </div>
      </div>
      <h3>Easter</h3>
      <div className="category-section" id="easter">
        <div className="category-row">
          {imagesEaster}
        </div>
      </div>
      <h3>Sympathy</h3>
      <div className="category-section" id="sympathy">
        <div className="category-row">
          {imagesSympathy}
        </div>
      </div>
      <h3>Other</h3>
      <div className="category-section" id="other">
        <div className="category-row">
          {imagesOther}
        </div>
      </div>
    </div>
  );
}

export default Home;

