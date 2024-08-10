import React from "react";
import { useState } from "react";

const Variable = () => {
    const [state,setState] = useState ({
        a : null,
        b : '',
        c : true,
        d : false,
        e : '',
        f : 0
    });

    let a = null;

    return(
        <div>
            <p>a : {state.a}</p>
            <p>a : {state.a !== null ? state.a.toString() : "null"}</p>
            <p>b : {state.b}</p>
            <p>c : {state.c}</p>
            <p>d : {state.d}</p>
            <p>e : {state.e}</p>
            <p>f : {state.f}</p>
        </div>
    )
}

export default Variable