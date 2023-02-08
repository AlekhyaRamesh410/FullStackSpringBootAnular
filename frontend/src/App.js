import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//function App() {
  class App extends Component{
    state = {};

    componentDidMount() {
        this.dadJokes()
    }

dadJokes = () => {
    fetch('/api/dadjokes')
        .then(response => response.text())
        .then(message => {
            this.setState({message: message});
        });
};
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  }

export default App;
