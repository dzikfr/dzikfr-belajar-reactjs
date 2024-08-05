const FunctionalComponent = (props) =>{ //({nama})
    return(
        <div>
            <h1>ini menggunakan functional component</h1>
            <h2>ini juga menggunakan functional component</h2>   
            <h2>Hallo {props.nama}</h2> {/*Hallo {nama}*/}
        </div>
    )
}

export default FunctionalComponent;