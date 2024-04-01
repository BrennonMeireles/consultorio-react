import React           from "react";
import EstruturaPagina from "../../components/estruturaPagina";
import Mapa            from "../../components/Mapa"
import "./estilo.css"

function Contato(){
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2>Horarios de Atendimento</h2>
                    <p>Agende uma consulta pelos telefones: (11)5642-3700</p>

                    <ul className="lista-medicos">
                        <li>
                            <img src="img/medico01.png" alt="medico 01"></img>
                            <p>Dr. Hélio</p>
                            <p>Segundas, Quartas e Sextas das 09:00 às 16:00</p>
                        </li>
                        <li>
                            <img src="img/medico02.png" alt="medico 02"></img>
                            <p>Dr. Carlos</p>
                            <p>Terças e Quintas das 13:00 às 18:00</p>
                        </li>
                        <li>
                            <img src="img/medico03.png" alt="medico 03"></img>
                            <p>Dra. Suzana</p>
                            <p>Terças, Quintas e Sabados das 08:00 às 12:00</p>
                        </li>
                    </ul>                    
                </div>

                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos localizados</h2>
                    <p>Rua Bento Branco de Andrade Filho, 379</p>
                    <p> Santo Amaro - SP</p>
                    <p>047000</p>
                    <Mapa/>
                </div>
            </div>
        </EstruturaPagina>
    )
} export default Contato