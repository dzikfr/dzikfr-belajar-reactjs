import React from "react";
import Plain from "./plain";
import Sass from "./Sass";
import Inline from "./inline";
import Module from "./module";
import Styled from "./styled";
import Bootstrap from "./bootstrap";

const Styling = () => {
    return(
        <div>
            <Plain/>
            <Sass/>
            <Inline/>
            <Module/>
            <Styled/>
            <Bootstrap/>
        </div>
    )
}

export default Styling