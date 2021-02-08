import React, { Component } from 'react';
import './CounterButton.css';
import PropTypes from 'prop-types'
// This is a class component
// this is the default export 
class CounterButton extends Component{
    // Define the initial state in a constructor
    // state => counter = 0
    
    constructor(){
        super(); // Error1: this keyword cant be used in constructor before super(); is called
        this.state = {
            counter : 0
        }
        // when you change render() to render = () => {} you dont need to bind the increment
        this.increment = this.increment.bind(this);
    }
    
    // render = () => {
    render() {
        // note that var is not a block scope variable
        // You can set the css stylings here in the .jsx file, but it is a hasle
        // let style = {fontSize : "50px", padding : "15px 30px"}
        
        return (
            <div className="counterButton">
                {/* Doing something like increment() will cause the method to be called on loading the page, where doing just increment will cause it to only be called on the click
                    As well, note that when we moved increment into the class, we need to use this.increment to tell program where to grab file from
                    this.props allows us to get our property called by
                    
                */}
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count"
                // This is how you add css, note the two brackets, one is to make a js object and the inner one is to have the css
                // But, it is probably better to add everything to one .css 
                // style = {style}
                >{this.state.counter}</span>
            </div>
        );
    }

    // now increment is no longer global
    // We can now set the state of the counter to be the state of the previous counter + 1;
    // Note that if we don't arrow this, an error gets thrown
    // increment = () => { // updates state
    increment(){
        // console.log('increment');
        // setState is actually a merge between virtual doms
        // this.state.counter++ is bad practice
        // set the counter to increase by the value of the by property
        this.setState({
            counter: this.state.counter + this.props.by

        });
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}
export default CounterButton;