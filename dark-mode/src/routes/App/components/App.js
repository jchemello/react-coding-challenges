import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import '../styles/_app.scss'

function App() {
  //?  Realicé la solución más fácil, la cual podría funcionar para otras rutas enviando por props theme y/o setTheme, sin embargo para una aplicación de mayor complejidad sería apropiado usar un Provider, Context API de React u otro state manager como Redux.
  //? Mi forma de agregar y modificar una clase al html tag fue con vanilla js, no pude encontrar otra forma desde react de hacerlo.

  const [theme, setTheme] = useState(null)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark-mode')
    if (document.documentElement.classList.contains('dark-mode')) {
      setTheme('dark-mode')
    } else {
      setTheme(null)
    }
  }

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button className="app__dark-mode-btn icon level-right">
          <FontAwesomeIcon
            icon={theme ? faSun : faMoon}
            color={theme && '#FFA500'}
            onClick={toggleTheme}
          />
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a href="#!" className="button is-primary">
            Save
          </a>
          <a href="#!" className="button is-link">
            Submit
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
