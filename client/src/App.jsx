import Home from './home/Home';
import Game from './game/Game';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
      </BrowserRouter>
  )
}
