import React, { Component } from 'react';
import './css/Main.css';
import A0LF from './assets/piano1/A0LF.wav';

class App extends Component {
  constructor(props) {
    super(props);
    const soundsArray = {
      "firstKey": A0LF
    }
    this.playSound = this.playSound.bind(this);
  }
  playSound() {
    var audio = new Audio(A0LF);
    audio.play();
  }
  render() {
    return (
      <div id="app">
        <div className="container">
          <div className="piano">
            <h1 className="brand">Digital Web Piano</h1>
            <div className="key-area">
              <div className="keys">
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="black"></div>
                <div className="key" onClick={this.playSound}></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
