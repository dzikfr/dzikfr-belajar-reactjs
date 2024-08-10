import React from "react";
import Variable from "./pembahasan/variable";
import Conditional from "./pembahasan/conditional";
import List from "./pembahasan/list";

const Rendering = () => {
    return(
        <div>
            <Variable/>
            <Conditional/>
            <List/>
        </div>
    )
}

export default Rendering