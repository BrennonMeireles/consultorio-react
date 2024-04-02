import React  from "react";
import Topo   from '../Topo/';
import Rodape from '../Rodape/';

function EstruturaPagina(props){
    return(
        <section>
            <Topo />
                { props.children }
            <Rodape />
        </section>
    );
}

export default EstruturaPagina;