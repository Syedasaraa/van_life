import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const AuthRequired = () => {
    const auth = {token : ""}
    
    if(auth.token){
        
        return <Outlet/>
    }else{
        return <Navigate to="/login" state={{message : "You be logged in to view this page"}}/>
    }
}

export default AuthRequired