import { useEffect, useState } from "react"
import { CardPost } from "../../components/CardPost"
import { getApi } from "../../api/blogApi"
import { ContainerPosts, ContainerTitle, TitleListPost } from "./styles"

export const HomePage = () => {
    const [listPosts, setListsPosts] = useState()

    const loadPosts = async () => {
        const returnApi = await getApi()
        const returnData = returnApi.data
        
        setListsPosts(returnData.reverse())
    }

    useEffect(() => {
        loadPosts()
    }, [])
    return (
        <>
            <ContainerTitle>
                <TitleListPost>Listagem de posts</TitleListPost>
            </ContainerTitle>
            <ContainerPosts>
                <CardPost listPosts={listPosts} />
            </ContainerPosts >
        </>
    )

}