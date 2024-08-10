import React from "react";

const List = () => {
    const users = ['dzikri', 'fauzi', 'ramdhani'];

    return(
        <div>
            <ul>
                {
                    users.map((user, i)=><li>{user}</li>)
                }
            </ul>
        </div>
    )
}

export default List