import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = this.getInitialState()
  }

  getInitialState = () => ({ name: '', hp: '', frontUrl: '', backUrl: '' })

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: this.state.hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon))
      .catch(error => console.error(error))
    this.setState(this.getInitialState())
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e, pokemon) => {
    e.preventDefault();
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{
          value: this.state.hp,
          name: "hp"
        }],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    this.setState()
  }


  render() {
    const { name, hp, frontUrl, backUrl } = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
<<<<<<< HEAD
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
=======
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={hp}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={frontUrl}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={backUrl}
              onChange={this.handleChange}
            />
>>>>>>> 562f6bbef3b873e2232a249879d567783b2229bd
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
