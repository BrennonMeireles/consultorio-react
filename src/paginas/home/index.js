import React from "react"
import { Link } from "react-router-dom"

import EstruturaPagina from "../../components/estruturaPagina"
import "./estilo.css"

function Home() {""
    return(
        <EstruturaPagina>
            <div className="home-apresentacao">
                <div className="limitar-container">
                    <h1>Confira os Melhores Aparelhos Dentários</h1>
                    <p>Confira abaixo todas as especialidades odontológicas que oferecemos!</p>
                    
                    <ul className="servicos">
                        <li>
                            <img src="../img/dente.png" alt="icone de um dente"></img>
                            <p>Pré-Avaliação</p>
                        </li>
                        <li>
                            <img src="../img/dente.png" alt="icone de um dente"></img>
                            <p>Aparelhos Ortodônticos</p>
                        </li>
                        <li>
                            <img src="../img/dente.png" alt="icone de um dente"></img>
                            <p>Exames de imagem digital</p>
                        </li>
                        <li>
                            <img src="../img/dente.png" alt="icone de um dente"></img>
                            <p>Clareamento dental</p>
                        </li>
                    </ul>
                </div>
            </div>

            <h2 className="titulo-sessao">Por que usar aparelho ortodôntico</h2>
            <img className="img-aparelho" src="../img/aparelho.png" alt="imagem de um aparelho ortodôntico" />

            <ul className="lista-aparelho limitar-container">
                <li>
                    <h3>Alinhar os Dentes</h3>
                    <p>Dentes desalinhados causam problemas nos dentes e podem afetar a respiração e a digestão dos alimentos</p>
                </li>
                <li>
                    <h3>Melhorar a dicção e a higiene bucal</h3>
                    <p>
                        Muitas pessoas não conseguem usar o fio dental devido à posição da sua dentição.
                        Contudo, a correção possibilita o cuidado com a saúde bucal de forma mais ampla.
                    </p>
                </li>
                <li>
                    <h3>Corrigir os espaços entre os dentes</h3>
                    <p>
                        Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas.
                        Usar aparelho é uma das formas mais eficientes para corrigir esses problemas.
                    </p>
                </li>
            </ul>

            <div className="home-depoimentos">
                <h2 className="titulo-sessao">Veja o que os nossos clientes estão falando...</h2>

                <ul className="img-aparelho">
                    <li>
                        <img className="img-aparelho" src="img/cleinte01.png" alt="depoimento do cliente 1"></img>
                        <p>Alberto Silva</p>
                        <p>..."Usei aparelho por anos e agora posso sorrir novamente"...</p>
                    </li>
                    <li>
                        <img className="img-aparelho" src="img/cleinte02.png" alt="depoimento do cliente 2"></img>
                        <p>Eliana Oliveira</p>
                        <p>..."Meus Dentes eram espaçados e depois de dois anos de uso estão no lugar certo"...</p>
                    </li>
                    <li>
                        <img className="img-aparelho" src="img/cleinte03.png" alt="depoimento do cliente 3"></img>
                        <p>Maria Souza</p>
                        <p>..."Comecei a usar no ano passado e ja estou estou sentindo a difereça"...</p>
                    </li>
                </ul>
            </div>

            <div>
                <Link to= "/Contato" className="btn-contato">Entrar em Contato</Link>
            </div>
        </EstruturaPagina>
    );  
} export default Home;
