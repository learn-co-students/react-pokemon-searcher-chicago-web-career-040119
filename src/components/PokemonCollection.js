import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  createCards = () => {
    const filteredPokemons = this.props.pokemons.filter(pokemon => !pokemon.hide)
    return filteredPokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} showBackOfCard={this.props.showBackOfCard}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.createCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
