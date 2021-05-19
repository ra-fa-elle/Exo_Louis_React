// afficher une liste de posts sous la form de cards
// donc partie 1, crée un composant card, qui prend comme props un id, un titre et un body

// bon bah tu dois avoir un app.js, dedans il y a le point d'entrée de ton app
// il faudrait juste que tu crée un nouveau composant, que tu appelle card.

import React, { Component } from 'react'
import './App.css'
import Article from './Article'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            data: result
          })
        },
        error => {
          console.log(error)
        }
      )
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.data.map((item, i) => (
              <Article key={i} title={item.title} content={item.body}/>
          ))}
      </div>
    )
  }
}

export default App