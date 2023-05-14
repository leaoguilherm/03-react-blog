import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import "./styles.css"
import { useState } from "react"
import { postApi } from "../../api/index"



export const CreatePost = () => {
    const [valueTitle, setValueTitle] = useState('')
    const [valueDescription, setValueDescription] = useState('')
    const [valueAuthor, setValueAuthor] = useState('')

    const changeTitle = (event) => {
        setValueTitle(event.target.value)
    }

    const changeDescription = (event) => {
        setValueDescription(event.target.value)
    }

    const changeAuthor = (event) => {
        setValueAuthor(event.target.value)
    }

    const clickCreatePost = async () => {
        const newPost = {
            title: valueTitle,
            description: valueDescription,
            author: valueAuthor
        };

        await postApi(newPost)
    }



    return (
        <div className="containerCreatePost">
            <h3 className="titleCreatePost">Cadastro de posts</h3>
            <div className="containerInput">
                <Input
                    htmlFor="title"
                    label="Título"
                    className="inputTitle"
                    name="title"
                    placeholder="Escreva o título do post"
                    onChange={changeTitle} />

                <Input
                    htmlFor="description"
                    label="Descrição"
                    className="inputDescription"
                    name="description"
                    placeholder="Escreva a descrição do post"
                    onChange={changeDescription} />

                <Input
                    htmlFor="author"
                    label="Autor"
                    className="inputAuthor"
                    name="author"
                    placeholder="Escreva o autor do post"
                    onChange={changeAuthor} />
            </div>
            <div className="container-buttonCreatePost">
                <Button className="buttonCreatePost" onClick={clickCreatePost}>Cadastrar post</Button>
            </div>
        </div>
    )
}