import React from "react"
import { Route, Routes } from "react-router-dom"
import Register from "../screens/Register"
import Login from "../screens/Login"

const AuthRouter = () => {
    return (
        <Routes location={"/login"}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AuthRouter
