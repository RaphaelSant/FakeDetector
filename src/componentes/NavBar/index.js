import React from "react";
import './navbar.css';
import Logo from '../../assets/Imagens/Logo.png';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-fk">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse container-navbar" id="navbarSupportedContent">
                <ul className="navbar-nav fk-navbar">
                    <li className="nav-item fk-link">
                        <Link to="/" className="nav-link">INÍCIO</Link>
                    </li>
                    <li className="nav-item fk-link">
                        <Link to="/sobre" className="nav-link">SOBRE</Link>
                    </li>
                    <li className="nav-item fk-link">
                        <Link to="/contato" className="nav-link">CONTATO</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/"><img src={Logo} className="img-navbar" alt="Minha Figura" /></Link>
                </div>
                <form className="form-inline">
                    <input className="form-control navbar-fk-form" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success navbar-fk-btn" type="submit" href="https://www.google.com">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;