import React , { Component } from "react";

export default class LifeCycleInCBC extends  Component{

    state = { value: 0}

    increaseCounter = () => {
        // console.log("Btn CLicked");
        // console.log(this);
        this.setState({ value: this.state.value + 1})
    }

    componentDidMount(){
        console.log("Mounting Phase");
        // console.log(this);
    } // componentDidMount executes when Component shows on the UI

    componentDidUpdate(){
        console.log("Updating Phase");
    }  // componentDidUpdate executes when Component Updates on the UI

    componentWillUnmount(){
        console.log("Unmounting Phase");
    }
    
    render(){
        return (
            <div>
                <h1>Life-Cycle in Class Based Component</h1>
                <h1>Counter: {this.state.value}</h1>
                <button onClick={this.increaseCounter}>Increment Count Value</button>
            </div>
        )
    }
}