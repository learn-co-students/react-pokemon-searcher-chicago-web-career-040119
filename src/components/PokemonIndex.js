import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemonsData => this.setState({pokemons: pokemonsData}))
  }

  showBackOfCard = (id) => {
    const clickedPokemon = this.state.pokemons.find(pokemon => pokemon.id === id)
    const clickedPokemonIndex = this.state.pokemons.indexOf(clickedPokemon)
    const newPokemons = [...this.state.pokemons]
    newPokemons[clickedPokemonIndex]["back"] = !newPokemons[clickedPokemonIndex]["back"]
    this.setState({
      pokemons: newPokemons
    })
  }

  searchPokemon = (event, {value}) => {
    const filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(value))
    const newPokemons = [...this.state.pokemons]
    newPokemons.forEach(pokemon => pokemon.hide = true)
    filteredPokemons.forEach(pokemon => {
      const clickedPokemonIndex = this.state.pokemons.indexOf(pokemon)
      newPokemons[clickedPokemonIndex]["hide"] = false
    })
    this.setState({
      pokemons: newPokemons
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searchPokemon, 500)} showNoResults={false} />
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} showBackOfCard={this.showBackOfCard}/>
      </div>
    )
  }
}

export default PokemonPage
