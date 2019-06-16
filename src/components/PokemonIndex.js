import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(poke => this.setState({
      pokemons: poke
    }))
  }

  getSeachInput =  (e, {value})  => {
    this.setState({
      search: value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }


  render() {
    const desiredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.getSeachInput} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={desiredPokemon}/>
        <br />
        <PokemonForm  addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
