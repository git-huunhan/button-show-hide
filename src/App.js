import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      showText: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      showText: !this.state.showText
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.onClick} >Click Me</button>
        {
          this.state.showText && <p>You are amazing! :v </p>
        }
      </div>
    );
  }
}

export default App;
