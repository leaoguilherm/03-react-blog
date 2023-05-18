// import "./styles.css"

import { ButtonHeader } from "./styles"



export const Button = ({children, ...props}) => {
    return (
            <ButtonHeader {...props}>{children}</ButtonHeader>
    )
}