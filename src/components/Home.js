//////////////////////////////////  TO DO  ///////////////////////////////////////////////
// - Display Image on Greeting Card Page to reflect which image was clicked on HOME page

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

  // Animals cards
  const imagesAnimals = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "animals") {
      return (
        img = <img className="card-preview-img" src={i.url} alt="animalCard" key={i.id} id={i.id} />
      )
    }
    return (
      img
    )
  })
  // Birthday cards
  const imagesBirthday = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "birthday") {
      return (
        img = <img className="card-preview-img" src={i.url} alt="birthdayCard" key={i.id} id={i.id} />
      )
    }
    return (
      img
    )
  })
  // Christmas cards
  const imagesChristmas = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "christmas") {
      img = <img className="card-preview-img" src={i.url} alt="christmasCard" key={i.id} id={i.id} />
    }
    return (
      img
    )
  })
  // Easter cards
  const imagesEaster = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "easter") {
      img = <img className="card-preview-img" src={i.url} alt="easterCard" key={i.id} id={i.id} />
    }
    return (
      img
    )
  })
  // Other cards
  const imagesOther = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "other") {
      img = <img className="card-preview-img" src={i.url} alt="otherCard" key={i.id} id={i.id} />
    }
    return (
      img
    )
  })
  // Sympathy cards
  const imagesSympathy = state.allCardImgs.map(i => {
    let img = ''
    if (i.category === "sympathy") {
      img = <img className="card-preview-img" src={i.url} alt="sympathyCard" key={i.id} id={i.id} />
    }
    return (
      img
    )
  })

  function handleClick(e) {
    localStorage.setItem("img", e.target.src)
  }


  return (
    <div className="container-home">
      <h3>Animals</h3>
      <div className="category-section" id="Birthday">
        <div className="category-row">
          <NavLink to="/cards" onClick={handleClick} >{imagesAnimals}</NavLink>
        </div>
      </div>
      <h3>Birthday</h3>
      <div className="category-section" id="Birthday">
        <div className="category-row">
          <NavLink to="/cards" onClick={handleClick} >{imagesBirthday}</NavLink>
        </div>
      </div>
      <h3>Christmas</h3>
      <div className="category-section" id="Christmas">
        <div className="category-row">
          <NavLink to="/cards" onClick={handleClick}>{imagesChristmas}</NavLink>
        </div>
      </div>
      <h3>Easter</h3>
      <div className="category-section" id="Easter">
        <div className="category-row">
          <NavLink to="/cards" onClick={handleClick}>{imagesEaster}</NavLink>
        </div>
      </div>
      <h3>Sympathy</h3>
      <div className="category-section" id="Other">
        <div className="category-row">
          <NavLink to="/cards" onClick={handleClick}>{imagesSympathy}</NavLink>
        </div>
      </div>
      <h3>Other</h3>
      <div className="category-section" id="Other">
        <div className="category-row">
          <NavLink to="/cards" onClick={handleClick}>{imagesOther}</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;

