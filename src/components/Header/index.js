import { Link } from "react-router-dom"
import { Button } from "../Button"
import "./styles.css"

export const Header = () => {
    return (
        <header className="header">
            <h1 className="title">React Blog</h1>
            <nav className="containetButton">
                <Link to='/'>
                    <Button className="buttonHeader">Home</Button>
                </Link>
                <Link to='/posts/create'>
                    <Button className="buttonHeader">Criar post</Button>
                </Link>
            </nav>
        </header>
    )
}