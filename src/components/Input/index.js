import "./styles.css"

export const Input = ({htmlFor,label, ...props}) => {
    return (
        <>
            <label htmlFor={htmlFor}>{label}</label>
            <input {...props}></input>
        </>
    )
}