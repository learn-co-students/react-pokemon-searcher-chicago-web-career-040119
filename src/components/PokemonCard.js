import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
      this.state={
        flipped: true
      }
  }

  flipped =()=> {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.flipped} className="image">
            <img src={this.state.flipped ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP {this.props.pokemon.stats.find(stats => stats.name === "hp").value || 50}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
