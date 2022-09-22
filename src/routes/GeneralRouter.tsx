import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "screens/Home"

const GeneralRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default GeneralRouter
