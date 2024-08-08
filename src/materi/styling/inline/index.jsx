import React from "react";

const Inline = () => {
    const style ={
        color: "red",
        backgroundColor: "blue"
    }

    return(
        <div>
            <h1 style={{color: "blue"}}>Ini style dengan inline css</h1>
            <h1 style={style}>ini juga inline styling</h1>
        </div>
    )
}

export default Inline