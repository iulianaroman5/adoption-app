

const Input = (props) => {
    const { value, label, name, placeholder, type, onChange  } = props;

    return <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
            type={type}
            value={value}
            name={name}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
        />
    </>
}

export default Input;