import react, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext(null);

export function UserProvider (props) {

    const [user, setUser] = useState('kentang');
    const [count, setCount] = useState(25);

    function toggleCount() {
        setCount(count+1)
    }

    // const callCount = () => {
    //     console.log(count)
    // }


    return (
        <UserContext.Provider value={{user, setUser, count, toggleCount}}>
            {props.children}
        </UserContext.Provider>
    )
}


