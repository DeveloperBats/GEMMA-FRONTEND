import React from "react"
import { Route, Routes } from "react-router-dom"
import Auth from "../screens/Auth"

const AuthRouter = () => {
    return (
        <Routes location={"/auth"}>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default AuthRouter
