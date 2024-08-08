import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    background-color: red;
    &:hover{
        background-color: white;
    }
`;

const Styled = () => {
    return(
        <div>
            <Button>Tombol ini menggunakan styled compponents</Button>
        </div>
    )
}

export default Styled