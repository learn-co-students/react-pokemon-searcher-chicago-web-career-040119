import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import Filter from './Filter.js'

class PokemonPage extends React.Component {
  constructor() {
    super()
      this.state = {
        search: '',
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

  //// search function //////
  handleSearchChange =(event, {value}) => {
    this.setState({filter: value})
  }

  // functions from Noa's artwork lab /////
  getSearchInput = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    const filteredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search))
    console.log(filteredPokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Filter getSearchInput={this.searchInput} search={this.state.search}/>

        <Search onSearchChange={this.handleSearchChange} showNoResults={false} /><br />
        {/*we only pass in the pokemons that match the value entered in the search*/}
        <PokemonCollection
        pokemons={filteredPokemon}
        key={this.state.pokemons.name}
        />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
