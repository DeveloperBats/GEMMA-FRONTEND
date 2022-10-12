import React from "react"
import Input from "components/atoms/Input"
import { useForm } from "hooks/useForm"

interface IUser {
    name: string
    password: string
}

const Auth = () => {
    const { handleChange, form } = useForm<IUser>({ initial: {} as IUser })

    return (
        <div className="auth">
            <div className="auth__login">
                <Input
                    type={"text"}
                    onChange={e => handleChange(e.target.value, "name")}
                    name="usuario"
                />
                <Input
                    type={"password"}
                    onChange={e => handleChange(e.target.value, "password")}
                    name="contraseña"
                />
                <input
                    type="button"
                    value="login"
                    onClick={() => console.log(form)}
                />
            </div>
            <div className="auth__register">hola</div>
        </div>
    )
}

export default Auth
