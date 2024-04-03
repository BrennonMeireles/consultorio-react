import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home    from '../paginas/home';
import Contato from '../paginas/contato';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/'        Component={Home} />
                <Route exact path='/contato' Component={Contato} />
            </Routes>    
        </BrowserRouter>
    );
}

export default Rotas;