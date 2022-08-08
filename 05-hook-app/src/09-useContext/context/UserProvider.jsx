import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const handleSetUser = (data) => setUser(data);

    return (
        <UserContext.Provider value={{user, handleSetUser}}>
            { children }
        </UserContext.Provider>
    )
}
