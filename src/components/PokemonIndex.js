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

  //// search function //////
  handleSearchChange =(event, {value}) => {
    this.setState({filter: value})
  }

  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} /><br />
        {/*we only pass in the pokemons that match the value entered in the search*/}
        <PokemonCollection
        pokemons={this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.filter))}
        key={this.state.pokemons.id}
        />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
