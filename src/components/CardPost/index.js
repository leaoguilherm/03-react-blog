import  {FormatDate} from "../../components/FormatDate"
import { Image } from "../image"
import { Card, FooterCard, TitleCard } from "./styles"

// import { Button } from "../Button";

export const CardPost = ({ listPosts }) => {
    return (
        <>
            {listPosts?.map((listPosts) => {
                return (
                    <Card key={listPosts.id}>
                        <TitleCard>{listPosts.title}</TitleCard>
                        <p>{listPosts.description}</p>

                        <Image src={listPosts.avatar} />
                        <FooterCard>
                            <div>Por: <strong>{listPosts.author}</strong></div>
                            <div>em {FormatDate(listPosts.createdAt)}</div>
                            {/* <Button className='deleteCard'>Excluir</Button> */}
                        </FooterCard>
                    </Card>
                )
            })}
        </>
    )

}