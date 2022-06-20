import React from "react";
import CoronaVirus from '../../assets/Imagens/fake_corona.png';
import BolsoPastel from '../../assets/Imagens/fake_bolso.png';
import Cientistas from '../../assets/Imagens/cientista.jpeg';
import './cards.css';

function Cards() {
    return(
        <>
            <div className="cards__container">
                <div className="card">
                    <img src={BolsoPastel} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-title">É #FAKE</p>
                        <p className="card-text">É #FAKE imagem que mostra Musk comendo pastel ao lado de Bolsonaro</p>
                    </div>
                </div>
                <div className="card">
                    <img src={CoronaVirus} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-title">É #VERDADE</p>
                        <p className="card-text">Coronavírus: casos confirmados da doença no mundo alcançam a marca de 528,5 milhões...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Cientistas} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-title">É #FAKE</p>
                        <p className="card-text">Cientistas chineses dizem que coronavírus tornara a maiorias dos infectados do sexo masculino infértil.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;