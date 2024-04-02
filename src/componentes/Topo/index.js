import React from "react";
import "./estilo.css"
import {Link} from "react-router-dom"

export default function Topo() {
    return(
        <header className="topo">
            <div className="conteudo-topo">

            <Link className="topo-links" to="/">
            <img src="../img/dente.png" alt="Dente"/>
            <h1>Dentes Saudáveis</h1>
            </Link>

            <nav className="topo-links">
                <Link className="topo-link" to="/">HOME</Link>
                <Link className="topo-link" to="/contato">CONTATO</Link>
            </nav>

            </div>
        </header>
    )
}