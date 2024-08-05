const FunctionalComponent = (props) =>{ //({nama})
    return(
        <div>
            <h1>hallo {props.nama}</h1>
            <h2>ini juga menggunakan functional component</h2>   
            <h2>Hallo {props.nama}</h2> {/*Hallo {nama}*/}
        </div>
    )
}

//default props
FunctionalComponent.defaultProps = {
    nama : "Guest"
}

export default FunctionalComponent;