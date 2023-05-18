import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { HomePage } from "../pages/HomePage";
import { CreatePost } from "../pages/CreatePost";
import { Main } from "./styles"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main className='main'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/posts/create' element={<CreatePost />} />
                </Routes>
            </Main>
        </BrowserRouter>
    );
}