import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

function Home(){
    return(
        <EstruturaPagina>
            <div className='home-apresentacao'>

                <div className='limitar-container'>
                    <h1>Confira os melhores aparelhos dentário</h1>

                    <p>Confira abaixo todas as especialidades odontológicas que oferecemos!</p>

                    <ul className='lista-servicos'>
                        <li>
                            <img src='../img/dente.png' alt='' />
                            <p>Pré-avaliação</p>
                        </li>
                        <li>
                            <img src='../img/dente.png' alt='' />
                            <p>Aparelhos ortodonticos</p>
                        </li>
                        <li>
                            <img src='../img/dente.png' alt='' />
                            <p>Exames de imagem digital</p>
                        </li>
                        <li>
                            <img src='../img/dente.png' alt='' />
                            <p>Clareamento dental</p>
                        </li>
                    </ul>
                </div>
            </div>

            <h2 className='titulo-sessao'>Por que usar aparelho ortodontico</h2>

            <img className='img-aparelho' src='../img/aparelho.png' alt='aparelho' />

            <ul className='lista-sobre-aparelho limitar-container'>
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>Dentes desalinhados cusam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                </li>
                <li>
                    <h3>Melhorar a dicção e a higiene bucal</h3>
                    <p>Muitas pessoas não conseguem usar fio dental devido a posição da sua dentição. Contudo a correção possibilita  cuidado com a saúde bucal de forma mais ampla.</p>
                </li>
                <li>
                    <h3>Corrigir os espaços entre os dentes</h3>
                    <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho é uma das formas mais eficientes para corrigir esses problemas.</p>
                </li>
            </ul>

            <div className='home-depoimentos'>
                <h2 className='titulo-sessao'>Veja o que os nossos clientes estão falando ...</h2>

                <ul className='lista-depoimentos'>
                    <li>
                        <img className='img-aparelho' src='../img/cliente01.png' alt='depoimento do cliente 1' />
                        <p>Alberto Silva</p>
                        <p>... "Usei aparelho por anos e agora posso sorrir novamente."</p>
                    </li>

                    <li>
                        <img className='img-aparelho' src='../img/cliente02.png' alt='Depoimento do cliente 2' />
                        <p>Eliana Oliveira</p>
                        <p>... "Meus dentes eram espaçados e depois de 2 anos de uso estão no lugar certo."</p>
                    </li> 

                    <li>
                        <img className='img-aparelho' src='../img/cliente03.png' alt='Depoimento do cliente 3' />
                        <p>Maria Souza</p>
                        <p>... "Comecei a usar no ano passado e já estou sentindo a diferença."</p>
                    </li>
                </ul>
            </div>

            <div>
                <Link to='/Contato' className='btn-contato'>Entrar em contato</Link>
            </div>

        </EstruturaPagina>
    );
}

export default Home;