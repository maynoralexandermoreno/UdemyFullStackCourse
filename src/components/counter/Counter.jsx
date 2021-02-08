import React, { Component } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';
// This is a class component
// this is the default export 
class Counter extends Component{
    render() {
        return (
            <div className="counter">
                <CounterButton by={1}/>
                <CounterButton by={5}/>
                <CounterButton by={10}/>
            </div>
        );
    }

}

export default Counter;