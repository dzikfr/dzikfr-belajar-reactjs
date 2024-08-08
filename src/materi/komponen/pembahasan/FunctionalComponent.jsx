const FunctionalComponent = ({nama ='guest', asal='place'}) =>{ //({nama})
    
    const fullNames = ['dzikri','fauzi','ramdhani'];
    return(
        <div>
            <h1>hallo {nama}</h1>
            <h2>ini juga menggunakan functional component</h2>   
            <h2>Hallo {nama} dari {asal}</h2> {/*Hallo {nama}*/}
            <ul>
                {
                    fullNames.map((fullName)=>(
                        <li key={fullName}>{fullName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

//default props
// FunctionalComponent.defaultProps = {
//     nama : "Guest"
// }

export default FunctionalComponent;