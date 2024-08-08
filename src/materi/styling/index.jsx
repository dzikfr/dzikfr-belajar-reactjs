import React from "react";
import Plain from "./plain";
import Sass from "./Sass";
import Inline from "./inline";
import Module from "./module";
import Styled from "./styled";

const Styling = () => {
    return(
        <div>
            <Plain/>
            <Sass/>
            <Inline/>
            <Module/>
            <Styled/>
        </div>
    )
}

export default Styling