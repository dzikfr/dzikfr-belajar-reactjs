import React from "react";

const List = () => {
    const users = ['dzikri', 'fauzi', 'ramdhani'];

    return(
        <div>
            <ul>
                {
                    users.map((user, i)=><li key={i}>{user}</li>)
                }
            </ul>
        </div>
    )
}

export default List