import React from "react";

class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h3>Hallo {this.props.nama}</h3>
                <p>sedangkan dibawah ini menggunakan state</p>
                <button onClick={this.handleMin}>-</button>
                <span>{'  '}{this.state.value}{'  '}</span>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }

    constructor(props){
        super(props)

        this.state = {
            value : 0 
        }

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMin = this.handleMin.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handlePlus(){
        this.setState({value: this.state.value <10 ? this.state.value +1 : this.state.value});
    }
    
    handleMin(){
        this.setState({value: this.state.value >-10 ? this.state.value -1 : this.state.value});
    }

    handleReset(){
        this.setState({value: 0});
    }
}

export default ClassComponent;

// const FunctionalComponent = ({ nama }) => {
//     const [value, setValue] = useState(0);

//     const handlePlus = () => {
//         setValue(prevValue => prevValue < 10 ? prevValue + 1 : prevValue);
//     };

//     const handleMin = () => {
//         setValue(prevValue => prevValue > -10 ? prevValue - 1 : prevValue);
//     };

//     const handleReset = () => {
//         setValue(0);
//     };

//     return (
//         <div>
//             <h1>Hello World</h1>
//             <h3>Hallo {nama}</h3>
//             <button onClick={handleMin}>-</button>
//             <span>{'  '}{value}{'  '}</span>
//             <button onClick={handlePlus}>+</button>
//             <button onClick={handleReset}>reset</button>
//         </div>
//     );
// };