interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: IProps) => {
    return (
        <label
            htmlFor={props.name}
            className={`customInput ${props.className}`}
        >
            {props.name && <p className="customInput--name">{props.name}</p>}
            <input name={props.name} {...props} />
            <p className="customInput--error">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </label>
    )
}

export default Input
