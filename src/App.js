import React from 'react'
import logo from './logo.svg'
import './App.css'
import { instantiate } from "assemblyscript/lib/loader";

class App extends React.Component {
  async componentDidMount() {
    this.engine = await instantiate(fetch("http://localhost:3000/predict.wasm"));
    let data = this.engine.predict(10, 20)
    console.log("data ", data)
  }
  render() {
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
    )
  }
}

export default App;
