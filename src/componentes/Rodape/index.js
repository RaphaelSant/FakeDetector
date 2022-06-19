import React from "react";
import Face from "../../assets/Imagens/faceIcon.png";
import Instagram from "../../assets/Imagens/instaIcon.png";
import Twitter from "../../assets/Imagens/twitIcon.png";


import { Link } from "react-router-dom";
import './rodape.css';

function Rodape() {
    return (
        <>
            <div className="rodape-container">
                <div className="rodape-conteudo">
                    <div className="rodape-links">
                        <Link to="/" className="rodape-linkto">FeedBack</Link>
                        <Link to="/" className="rodape-linkto">Trabalhe conosco</Link>
                        <Link to="/" className="rodape-linkto">Comunicar erro</Link>
                        <Link to="/" className="rodape-linkto">Anuncie no DoNotFake</Link>
                        <Link to="/" className="rodape-linkto">Segurança e privacidade</Link>
                    </div>

                    <div className="rodape-icons">
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src={Face} alt="Facebook Icon" className="rodape-icons-text" />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="Instagram Icon" className="rodape-icons-text" />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src={Twitter} alt="Twitter Icon" className="rodape-icons-text" />
                        </a>
                    </div>
                </div>

                <div><p className="rodape-copy">© Copyright 2022</p></div>
            </div>
        </>
    );
}

export default Rodape;