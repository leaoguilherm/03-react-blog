import { Button } from "../Button"
import "./styles.css"

export const Header = () => {
    return (
        <header className="header">
            <h1 className="title">React Blog</h1>
            <nav className="containetButton">
                <Button className="buttonHeader">Home</Button>
                <Button className="buttonHeader">Criar post</Button>
            </nav>
        </header>
    )

}