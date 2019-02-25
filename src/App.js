import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import ApiApp from './Api';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
class App extends Component {
  // state = {
  //   characters: [
  //     {
  //         'name': 'Charlie',
  //         'job': 'Janitor'
  //     },
  //     {
  //         'name': 'Mac',
  //         'job': 'Bouncer'
  //     },
  //     {
  //         'name': 'Dee',
  //         'job': 'Aspring actress'
  //     },
  //     {
  //         'name': 'Dennis',
  //         'job': 'Bartender'
  //     }
  //   ]
  // };
  state = {
    characters: []
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
    this.setState({characters: [...this.state.characters, character]});
  }
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, React!</h1>
        <Table
            characterData={characters}
            removeCharacter={this.removeCharacter} 
        />
        <Form handleSubmit={this.handleSubmit} />
        <ApiApp/>
      </div>
    );
  }
}

export default App;
