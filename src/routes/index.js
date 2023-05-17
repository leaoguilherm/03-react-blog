import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { HomePage } from "../pages/HomePage";
import { CreatePost } from "../pages/CreatePost";
import './styles.css'


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <main className='main'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/posts/create' element={<CreatePost />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}