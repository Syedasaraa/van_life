import React from 'react'
import { Navigate, Outlet , useLocation} from 'react-router-dom'
const AuthRequired = () => {
    const location= useLocation()
    const isLoggedIn = localStorage.getItem("loggedin")

    if(!isLoggedIn){
        return <Navigate to="/login" 
        state={{message : "You must be logged in to view this page" , from : location.pathname} } 
        replace/>
    }
    return <Outlet/>
}

export default AuthRequired