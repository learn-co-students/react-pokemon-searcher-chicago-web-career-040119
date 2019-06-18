import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>Say Hello To All These Pokemon!</h1>
        <Card.Group itemsPerRow={6}>
        {
          this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} />)
        }
=======
        <Card.Group itemsPerRow={6}>
          <h1>Hello From Pokemon Collection</h1>
          {this.props.pokemons.map(pokemon => < PokemonCard pokemon={pokemon}/>)}
>>>>>>> 562f6bbef3b873e2232a249879d567783b2229bd
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
