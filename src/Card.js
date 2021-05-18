// et tu vas devoir afficher une liste de posts sous la form de cards
// un truc simple :
// donc partie 1, crée un composant card, qui prend comme props un id, un titre et un body
// il doit pouvoir prendre des arguments
// 2 en locurence, titre et contenu

import React from 'react'
import './Card.css'

function Card(props) {
    return (
         <li>
              <h2>title: {props.title}</h2>
              <p> {props.body} </p>
         </li>
    )
}

export default Card