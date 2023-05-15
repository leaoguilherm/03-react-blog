import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import "./styles.css"
import { useState } from "react"
import { postApi } from "../../api/index"



export const CreatePost = () => {
    const [valueTitle, setValueTitle] = useState('')
    const [valueDescription, setValueDescription] = useState('')
    const [valueAuthor, setValueAuthor] = useState('')

    const [elementStyle, setElementStyle] = useState ('none')

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
        if (valueTitle !== '' && valueDescription !== '' && valueAuthor !== '') { 
            await postApi(newPost)
            setElementStyle('block')
            setValueTitle('')
            setValueDescription('')
            setValueAuthor('')
        }
        
    }

    const formInput = (event) => {
        event.preventDefault()
    }


    return (
        <div className="containerCreatePost">
            <h3 className="titleCreatePost">Cadastro de posts</h3>
            <form onSubmit={formInput}>
                <div className="containerInput">
                    <Input
                        htmlFor="title"
                        label="Título"
                        className="inputTitle"
                        name="title"
                        placeholder="Escreva o título do post"
                        onChange={changeTitle}
                        value={valueTitle}
                        required />

                    <Input
                        htmlFor="description"
                        label="Descrição"
                        className="inputDescription"
                        name="description"
                        placeholder="Escreva a descrição do post"
                        onChange={changeDescription}
                        value={valueDescription}
                        required />

                    <Input
                        htmlFor="author"
                        label="Autor"
                        className="inputAuthor"
                        name="author"
                        placeholder="Escreva o autor do post"
                        onChange={changeAuthor}
                        value={valueAuthor}
                        required />
                </div>
                <div className="successMessage" style={{ display: elementStyle }}>Publicação realizada com sucesso.</div>
                <div className="container-buttonCreatePost">
                    <Button className="buttonCreatePost" onClick={clickCreatePost} typ="submit">Cadastrar post</Button>
                </div>
            </form>
        </div>
    )
}