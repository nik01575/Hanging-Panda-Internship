import { Component } from "react";

class ChildCbc extends Component {
    render() {
        return (
            <div>
                <div>Child Component : {this.props.data} </div>
            </div>
        )
    }
}
export default ChildCbc