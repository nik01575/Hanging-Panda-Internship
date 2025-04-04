import { Component } from "react";

class StateClsComp extends Component {

    // state ={
    //     data:0
    // }

    // handleData = () => {
    //     this.setState({
    //         data : this.state.data + 1
    //     });
    // }

//   state = {
//     age: 42,
//   };

//   handleAgeChange = () => {
//     console.log("clicked");
//     this.setState({
//       age: this.state.age + 1,
//     });
//   };

    // state = {
    //     data: "Data Hai"
    // }

    // handleDataChange = () => {

    //     if(this.state.data == "Data Hai"){
    //         this.setState({
    //             data : "Data nhi hai",
    //         })
    //     }else{
    //         this.setState({
    //             data : "Data Hai"
    //         })
    //     }
       
    // }

    state = {
        count : 0
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    handleReset = () => {
        this.setState({
            count : 0
        })
    }

  render() {
    return (
      <div>
        {/* <h1> Counter : {this.state.data}</h1>
        <button onClick={this.handleData}>Increase Counter</button> */}

        {/* <button onClick={this.handleAgeChange}>Increase Counter</button>
        <p>You are {this.state.age}.</p> */}

        {/* <h1>{this.state.data}</h1>
        <button onClick={this.handleDataChange}>Change</button> */}

        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleIncrement} >Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
export default StateClsComp;
