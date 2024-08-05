import React from "react";

class ClassComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value : 0 
        }

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMin = this.handleMin.bind(this);
    }

    handlePlus(){
        this.setState({value: this.state.value +1})
    }
    handleMin(){
        this.setState({value: this.state.value -1})
    }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h3>Hallo {this.props.nama}</h3>
                <button onClick={this.handleMin}>-</button>
                <span>{'  '}{this.state.value}{'  '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent;