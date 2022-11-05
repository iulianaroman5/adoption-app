const Button = (props) => {
    return <button
        className={props.class}
        type={props.type ?? "submit"}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.btnName}
    </button>
}

export default Button;