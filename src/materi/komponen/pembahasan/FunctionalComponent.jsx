import React from 'react';

const FunctionalComponent = ({nama ='guest', asal='place'}) =>{ //({nama})
    
    const fullNames = ['dzikri','fauzi','ramdhani'];
    const [likes, setLikes] = React.useState(0);

    function handleClick(){
        setLikes(likes < 10? likes+1 : likes);
    }

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
            <button onClick ={handleClick}>Likes maks10 ({likes})</button>
        </div>
    )
}

//default props
// FunctionalComponent.defaultProps = {
//     nama : "Guest"
// }

export default FunctionalComponent;