import  {FormatDate} from "../../components/FormatDate"
import { Card, FooterCard, TitleCard } from "./styles"
// import { Button } from "../Button";

export const CardPost = ({ listPosts }) => {
    return (
        <>
            {listPosts?.map((listPosts) => {
                return (
                    <Card className="card" key={listPosts.id}>
                        <TitleCard className="titleCard">{listPosts.title}</TitleCard>
                        <p>{listPosts.description}</p>
                        <FooterCard className="footerCard">
                            <div>Por: {listPosts.author}</div>
                            <div>em {FormatDate(listPosts.createdAt)}</div>
                            {/* <Button className='deleteCard'>Excluir</Button> */}
                        </FooterCard>
                    </Card>
                )
            })}
        </>
    )

}