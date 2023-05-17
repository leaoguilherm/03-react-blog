import "./styles.css"
import { useEffect, useState } from "react"
import { CardPost } from "../../components/CardPost"
import { getApi } from "../../api/blogApi"

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
            <div className="containerTitlelistPost">
                <h3 className="titleListPost">Listagem de posts</h3>
            </div>
            <div className="containerPosts">
                <CardPost listPosts={listPosts} />
            </div >
        </>
    )

}