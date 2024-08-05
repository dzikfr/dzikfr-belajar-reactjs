import React from "react";

class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h3>hallo {this.props.nama}</h3>
            </div>
        )
    }
}

export default ClassComponent;