import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { CreatePost } from './pages/CreatePost';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <CreatePost />
        <HomePage/>
      </div>

    </div>
  );
}

export default App;
