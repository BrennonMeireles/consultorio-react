import React from "react"
import { Link } from 'react-router-dom'
import 'estilo.css'

function Topo(){
    return(
        <header className = "topo">
            <div className = "topo-conteudo">
                <Link className = "topo-logo-box" to = "/" >
                    <img className = "topo-logo"
                        src =   "../img/dente.png"
                        alt =   "dente - logo da clinica"
                        title = "dentes saudaveis"
                    />

                    <p className="topo-nome-empresa">dentes saudaveis</p>
                    <nav className = "topo-nav">
                        <Link className="topo-link" to="/">Home</Link>
                        <Link className="topo-link" to="/contato">Contato</Link>
                    </nav>
                </Link>
            </div>

        </header>
    )
} export default Topo
