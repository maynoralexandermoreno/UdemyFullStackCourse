// need this to enable jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';

// Class components and functional components should start with uppercase letter
class App  extends Component{
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}


class LearningComponents extends Component{
  render() {
    return (
      <div className="LearningComponents">
        
        My Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        
      </div>
    );
  }
}
export default App;