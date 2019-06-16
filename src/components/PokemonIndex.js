import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
      this.state = {
        pokemons: [],
        filter: ''
      }
  }
  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({
          pokemons: pokemons
        })
      })
  }

  // functions from Noa's artwork lab /////
  handleSearchChange = event => {
    this.setState({
      filter: event.target.value
    })
  }

  addPokemon =(pokemon)=> {
    this.setState({
      pokemons: [...this.state.pokemon, pokemon]
    })
  }

  render() {
    const filteredPokemon=this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.filter))

    // console.log(filteredPokemon)
    return (
        <div>
          <h1>Pokemon Searcher</h1><br/>
          <PokemonForm addPokemon={this.addPokemon} />

          <Search
          onSearchChange={this.handleSearchChange}
          filter={this.state.filter}/><br />
          {/*we only pass in the pokemons that match the value entered in the search*/}
          <PokemonCollection
          pokemons={filteredPokemon}
          /><br/>

        </div>
    )
  }
}

export default PokemonPage
