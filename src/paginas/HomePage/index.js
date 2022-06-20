import React from "react";
import './homepage.css';
import Anuncio from "../../componentes/Anuncio";
import NavBar from "../../componentes/NavBar";
import Rodape from "../../componentes/Rodape";

function HomePage() {
    return (
        <>
            <NavBar />
            <div className="homepage__container">
                <Anuncio />
                <div className="homepage__cards">
                    
                </div>

            </div>

            <Rodape />
        </>
    );
}

export default HomePage;