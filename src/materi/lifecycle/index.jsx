import React, {useState} from 'react';

const Lifecycle = () => {
    const [name, setName] = useState("Components");
    const [view, setView] = useState(true);
    const [count, setCount] = useState(0);
    
    return(
        <div>
            {view && <Title name={name} count={count}/>}

            <button onClick={()=> setView({view: false})}>copot</button>
            <button onClick={()=> setName({name: 'Class'})}>update</button>
            <button onClick={()=> setCount({count: count+1})}>count</button>
        </div>
    )
}

export default Lifecycle