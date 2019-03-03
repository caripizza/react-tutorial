import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import ApiApp from './Api';
import Heading from './Heading';

class App extends Component {
  state = {
    characters: [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => { 
        return i !== index;
      })
    });
  } 

  handleSubmit = character => {
    this.setState({
      characters: [
        ...this.state.characters,
        character
      ]
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <img src={logo} 
          className="App-logo" 
          alt="logo" 
        />
        <Heading />
        <Form handleSubmit={this.handleSubmit} />
        <Table
            characterData={characters}
            removeCharacter={this.removeCharacter} 
        />
        <ApiApp/>
      </div>
    );
  }
}

export default App;
