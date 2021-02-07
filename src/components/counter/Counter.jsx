import React, { Component } from 'react';
import './Counter.css';
// This is a class component
// this is the default export 
class Counter extends Component{
    // Define the initial state in a constructor
    // state => counter = 0
    
    constructor(){
        super(); // Error1: this keyword cant be used in constructor before super(); is called
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }
    render(){
        return (
            <div className="counter">
                {/* Doing something like increment() will cause the method to be called on loading the page, where doing just increment will cause it to only be called on the click
                    As well, note that when we moved increment into the class, we need to use this.increment to tell program where to grab file from
                    
                */}
                <button onClick={this.increment}>+1</button>
                
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    // now increment is no longer global
    // We can now set the state of the counter to be the state of the previous counter + 1;
    increment(){ // updates state
        // console.log('increment');
        this.setState({
            counter: this.state.counter + 1

        });
    }
}

export default Counter;