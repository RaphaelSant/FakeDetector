import React from "react";
import './noticias.css';

function Noticias() {
    return(
        <>
            <div className="noticias__container">
                <div className="noticias__doDia">
                    <h4>Noticias do dia</h4>
                    <div className="noticia"></div>
                    <div className="noticia"></div>
                    <div className="noticia"></div>
                </div>
                <div className="">
                    <h4>Mais lidas</h4>
                    <div className="noticias__maisLidas">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Noticias;