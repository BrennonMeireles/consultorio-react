import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home    from '../paginas/Home';
import Contato from '../paginas/Contato';

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