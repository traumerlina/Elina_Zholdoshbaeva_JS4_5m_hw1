import React, { useState } from "react";
import { useDispatch } from "react-redux";


function Users () {
    const [number, setCount] = useState();
    const dispatch = useDispatch();

    // const addUser = () => {
    //     const obj = {type:"ADD_USER", payload:name}
    //     dispatch(obj)
    // }

    const addCount = () => {
        const obj = {type:"ADD_COUNT", payload: +number}
        dispatch(obj)
    }

    return (
        <div>
            <input type = {number} onChange={(e) => setCount(e.target.value)}/>
            {/* <button onClick={addUser}>add user</button> */}
            <button onClick={addCount}>add count</button>
        </div>
    )
}



export default Users;