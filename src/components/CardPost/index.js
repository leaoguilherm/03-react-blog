import "./styles.css";
import  {FormatDate} from "../../components/FormatDate"
// import { Button } from "../Button";

export const CardPost = ({ listPosts }) => {
    return (
        <>
            {listPosts?.map((listPosts) => {
                return (
                    <div className="card" key={listPosts.id}>
                        <h4 className="titleCard">{listPosts.title}</h4>
                        <p>{listPosts.description}</p>
                        <footer className="footerCard">
                            <div>Por: {listPosts.author}</div>
                            <div>em {FormatDate(listPosts.createdAt)}</div>
                            {/* <Button className='deleteCard'>Excluir</Button> */}
                        </footer>
                    </div>
                )
            })}
        </>
    )

}