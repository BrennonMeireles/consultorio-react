import React from "react"
import { Link } from 'react-router-dom'
import './estilo.css' // Corrigido o caminho do arquivo de estilo

function Topo(){
    return(
        <header className="topo">
            <div className="topo-conteudo">
                <Link className="topo-logo-box" to="/">
                    <img className="topo-logo"
                        src="../public/img/aparelho.png"
                        alt="dente - logo da clinica"
                        title="dentes saudáveis"
                    />
                    <p className="topo-nome-empresa">dentes saudáveis</p>
                    <nav className="topo-nav">
                        <Link className="topo-link" to="/">Home</Link>
                        <Link className="topo-link" to="/contato">Contato</Link>
                    </nav>
                </Link>
            </div>
        </header>
    )
} export default Topo
