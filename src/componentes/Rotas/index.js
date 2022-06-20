import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../paginas/HomePage";
import Sobre from "../../paginas/Sobre";
import Contato from "../../paginas/Contato";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;