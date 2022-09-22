import Header from "components/layouts/Header"
import React, { useState } from "react"
import AuthRouter from "routes/AuthRouter"
import GeneralRouter from "routes/GeneralRouter"

const AppLayout = () => {
    const [auth, _setAuth] = useState<boolean>(false)

    return (
        <>
            <Header />
            {auth ? <GeneralRouter /> : <AuthRouter />}
        </>
    )
}

export default AppLayout
