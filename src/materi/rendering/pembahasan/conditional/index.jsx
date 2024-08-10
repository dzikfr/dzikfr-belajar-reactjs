import React from "react";

const Conditional = () => {
    const isLogin = true;
    let message = '';

    isLogin ? message = 'Anda sudah Login' : message = 'Anda belum login';
    return(
        <h1>{message}</h1>
    )
}

export default Conditional