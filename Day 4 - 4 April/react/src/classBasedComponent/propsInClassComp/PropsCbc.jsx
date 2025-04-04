import { Component } from "react";
import ChildCbc from "./ChildCbc";

class PropsCbc extends Component {

    data = "Nik"
    
    render() {
      return (
        <div>
            <h1>Parent Component</h1>
            <ChildCbc data={this.data} /> 
        </div>
      )
    }
}

export default PropsCbc