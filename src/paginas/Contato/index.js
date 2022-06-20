import React from "react";
import './contato.css';
import NavBar from "../../componentes/NavBar";
import Rodape from "../../componentes/Rodape";

function Contato() {
    return (
        <>
            <NavBar />
            <h1 className="contato_title">Contato</h1>
                <div className="contato__container">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Nome completo</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Se apresente</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary contato_button">Enviar</button>
                    </form>
                </div>
            <Rodape />
        </>
    );
}

export default Contato;