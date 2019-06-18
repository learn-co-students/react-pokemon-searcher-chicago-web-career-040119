import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
<<<<<<< HEAD

  state = {
    flipped: true
  }

  togglePic = () => {
=======
  constructor(props) {
    super(props)
      this.state={
        flipped: true
      }
  }

  flipped =()=> {
>>>>>>> 562f6bbef3b873e2232a249879d567783b2229bd
    this.setState({
      flipped: !this.state.flipped
    })
  }

<<<<<<< HEAD

=======
>>>>>>> 562f6bbef3b873e2232a249879d567783b2229bd
  render() {

  const hp = this.props.pokemon.stats.find(s => s.name === 'hp').value || 50
  const front = this.props.pokemon.sprites.front
  const back = this.props.pokemon.sprites.back

   return (
      <Card>
        <div>
<<<<<<< HEAD
          <div onClick={this.togglePic} className="image">
            <img alt="oh no!" src={this.state.flipped ? front : back} />
=======
          <div onClick={this.flipped} className="image">
            <img src={this.state.flipped ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back } alt="oh no!" />
>>>>>>> 562f6bbef3b873e2232a249879d567783b2229bd
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
<<<<<<< HEAD
               {hp} hp
=======
              HP {this.props.pokemon.stats.find(stats => stats.name === "hp").value || 50}
>>>>>>> 562f6bbef3b873e2232a249879d567783b2229bd
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
