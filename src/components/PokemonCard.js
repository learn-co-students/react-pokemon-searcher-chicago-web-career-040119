import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: true
  }

  togglePic = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }


  render() {

  const hp = this.props.pokemon.stats.find(s => s.name === 'hp').value || 50
  const front = this.props.pokemon.sprites.front
  const back = this.props.pokemon.sprites.back

   return (
      <Card>
        <div>
          <div onClick={this.togglePic} className="image">
            <img alt="oh no!" src={this.state.flipped ? front : back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
