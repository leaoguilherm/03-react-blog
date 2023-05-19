import { Link } from "react-router-dom"
import { Button } from "../Button"
import { ContainerButton, HeaderMain, Title } from "./styles"


export const Header = () => {
    return (
        <HeaderMain className="header">
            <Title className="title">React Blog</Title>
            <ContainerButton className="containerButton">
                <Link to='/'>
                    <Button >Home</Button>
                </Link>
                <Link to='/posts/create'>
                    <Button >Criar post</Button>
                </Link>
            </ContainerButton>
        </HeaderMain>
    )
}