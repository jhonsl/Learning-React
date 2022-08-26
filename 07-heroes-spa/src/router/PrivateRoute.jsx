import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
    const {pathname, search} = useLocation();
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        localStorage.setItem('lastPath', pathname + search);
    }, [pathname, search])

    return (authState.logged) 
        ? children
        : <Navigate to='/login' />
}
