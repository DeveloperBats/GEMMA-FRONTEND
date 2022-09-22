import React from "react"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary"
}

const Button = (props: IButtonProps) => {
    return (
        <button
            title={props.title}
            className={`${props.variant}-button`}
            {...props}
        />
    )
}

export default Button
