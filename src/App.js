import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <Hello name="world" name2='universe' />
        </p>
      </div>
    );
  }
}

const Hello = () => ({
    render()
    {
        return <div>Hello {this.props.name2}</div>
    }
})

export default App;
