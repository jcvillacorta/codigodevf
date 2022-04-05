import React, {useState} from "react";
import { useNavigate, Outlet } from "react-router";
import './AuthView.css';

function AuthView(props) {
    const {setToken, setName} = props
    

    return (
        <div className="auth-view">
            <Outlet />
        </div>
    )
}

export default AuthView