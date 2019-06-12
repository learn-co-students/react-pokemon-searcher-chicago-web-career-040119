import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  render() {
    const pokemon = this.props.pokemon;
    return (
      <Card onClick={event => this.props.showBackOfCard(this.props.pokemon.id)}>
        <div>
        <div className="image">
          <img src={pokemon.sprites[this.props.pokemon.back ? "back" : "front"]} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.stats[pokemon.stats.length -1 ].value} hp
          </span>
        </div>
      </div>
      </Card>
    )
  }
}

export default PokemonCard
