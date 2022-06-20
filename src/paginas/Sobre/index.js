import React from "react";
import './sobre.css';
import NavBar from "../../componentes/NavBar";
import Rodape from "../../componentes/Rodape";

function Sobre() {
    return(
        <>
            <NavBar />
            
                <div className="sobre__container">
                    <h1>Sobre</h1>
                    <p>Esse site foi criado pelo grupo de combate à desinformação na matéria de extensão da faculdade Sapiens.</p>
                </div>
            <Rodape />
        </>
    );
}

export default Sobre;