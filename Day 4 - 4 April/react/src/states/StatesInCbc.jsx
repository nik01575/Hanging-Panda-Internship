import { Component } from "react";

class StatesInCbc extends Component{
    constructor(props) {
        super(props); // Calls parent class constructor and allows 'this.props' usage
        this.state = { val: 0 }; // initializes the component’s state before rendering.
    }

    increment = () => {
        this.setState({ val: this.state.val + 1 }); // update state in class components.
    };

    render() {
        return (
          <div>
            <h1>Count: {this.state.val}</h1>
            <button onClick={this.increment}>Increment</button>
          </div>
        );
    }
}

export default StatesInCbc;