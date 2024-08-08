import React from "react";
import Plain from "./plain";
import Sass from "./Sass";
import Inline from "./inline";
import Module from "./module";

const Styling = () => {
    return(
        <div>
            <Plain/>
            <Sass/>
            <Inline/>
            <Module/>
        </div>
    )
}

export default Styling