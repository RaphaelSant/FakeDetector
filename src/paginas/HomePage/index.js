import React from "react";
import './homepage.css';
import Anuncio from "../../componentes/Anuncio";
import NavBar from "../../componentes/NavBar";
import Rodape from "../../componentes/Rodape";
import Cards from "../../componentes/Cards";
import Noticias from "../../componentes/Noticias";

function HomePage() {
    return (
        <>
            <NavBar />
            <div className="homepage__container">
                <Anuncio />
                <div className="homepage__cards">
                    <Cards />
                </div>
                <Anuncio />
                <Noticias />
            </div>
            
            <Rodape />

        </>
    );
}

export default HomePage;