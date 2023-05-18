import { InputCreatePost, LabelCreatePost } from "./styles"


export const Input = ({htmlFor,label, ...props}) => {
    return (
        <>
            <LabelCreatePost htmlFor={htmlFor}>{label}</LabelCreatePost>
            <InputCreatePost {...props}></InputCreatePost>
        </>
    )
}